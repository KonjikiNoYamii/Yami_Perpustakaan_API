import type { PrismaClient, Prisma, Loan } from "@prisma/client";
import type { ILoanRepository } from "../repositories/loan.repository";

export interface CreateLoanInput {
  items: {
    bookId: string;
    qty: number;
  }[];
}

export interface FindAllLoanParams {
  page: number;
  limit: number;
  search?: {
    userId?: string;
    status?: "BORROWED" | "RETURNED";
  };
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface LoanListResponse {
  loans: Loan[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export class LoanService {
  constructor(
    private prisma: PrismaClient,
    private loanRepo: ILoanRepository
  ) {}

  // ===============================
  // CHECKOUT (TRANSACTION)
  // ===============================
  checkout = async (userId: string, data: CreateLoanInput) => {
    return this.prisma.$transaction(async (tx) => {
      const bookIds = data.items.map((i) => i.bookId);

      const books = await this.loanRepo.findBooksForCheckout(bookIds, tx);

      const loanItems: Prisma.LoanItemCreateWithoutLoanInput[] = [];

      for (const item of data.items) {
        const book = books.find((b) => b.id === item.bookId);

        if (!book) {
          throw new Error(`Buku ${item.bookId} tidak ditemukan`);
        }

        if (book.stok < item.qty) {
          throw new Error(`Stok buku ${book.nama} tidak cukup`);
        }

        loanItems.push({
          book: {
            connect: { id: book.id },
          },
          qty: item.qty,
        });

        await this.loanRepo.decrementStock(book.id, item.qty, tx);
      }

      return this.loanRepo.createLoanWithItems(
        {
          user: { connect: { id: userId } },
          status: "BORROWED",
          items: {
            create: loanItems,
          },
        },
        tx
      );
    });
  };

  // ===============================
  // GET ALL LOAN (ADMIN)
  // ===============================
  getAllLoans = async (
    params: FindAllLoanParams
  ): Promise<LoanListResponse> => {
    const { page, limit, search, sortBy, sortOrder } = params;
    const skip = (page - 1) * limit;

    const where: Prisma.LoanWhereInput = {
      deletedAt: null,
    };

    if (search?.userId) where.userId = search.userId;
    if (search?.status) where.status = search.status;

    const orderBy: Prisma.LoanOrderByWithRelationInput = sortBy
      ? { [sortBy]: sortOrder ?? "desc" }
      : { createdAt: "desc" };

    const loans = await this.loanRepo.findAll(skip, limit, where, orderBy);
    const total = await this.loanRepo.countAll(where);

    return {
      loans,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  };

  // ===============================
  // RETURN LOAN (TRANSACTION)
  // ===============================
  returnLoan = async (loanId: string) => {
    return this.prisma.$transaction(async (tx) => {
      const loan = await this.loanRepo.findById(loanId);

      if (!loan) {
        throw new Error("Loan tidak ditemukan");
      }

      for (const item of loan.items) {
        await tx.book.update({
          where: { id: item.bookId },
          data: {
            stok: { increment: item.qty },
          },
        });
      }

      return this.loanRepo.returnLoan(loanId, tx);
    });
  };
}
