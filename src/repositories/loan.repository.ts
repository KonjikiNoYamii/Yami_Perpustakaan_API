import type {
  Prisma,
  PrismaClient,
  Loan,
  User,
  LoanItem,
  Book,
} from "../../dist/generated";

export type LoanWithItems = Loan & {
  user: User;
  items: (LoanItem & {
    book: Book;
  })[];
};

export interface ILoanRepository {
  findBooksForCheckout(
    bookIds: string[],
    tx: Prisma.TransactionClient
  ): Promise<
    {
      id: string;
      stok: number;
      nama: string;
    }[]
  >;

  decrementStock(
    bookId: string,
    qty: number,
    tx: Prisma.TransactionClient
  ): Promise<void>;

  createLoanWithItems(
    data: Prisma.LoanCreateInput,
    tx: Prisma.TransactionClient
  ): Promise<Loan>;

  findAll(
    skip: number,
    take: number,
    where: Prisma.LoanWhereInput,
    orderBy: Prisma.LoanOrderByWithRelationInput
  ): Promise<Loan[]>;

  countAll(where: Prisma.LoanWhereInput): Promise<number>;

  findById(id: string): Promise<LoanWithItems | null>;

  returnLoan(id: string, tx: Prisma.TransactionClient): Promise<Loan>;
}

export class LoanRepository implements ILoanRepository {
  constructor(private prisma: PrismaClient) {}

  async findBooksForCheckout(bookIds: string[], tx: Prisma.TransactionClient) {
    return tx.book.findMany({
      where: {
        deletedAt: null,
        id: { in: bookIds },
      },
      select: {
        id: true,
        stok: true,
        nama: true,
      },
    });
  }

  async decrementStock(
    bookId: string,
    qty: number,
    tx: Prisma.TransactionClient
  ) {
    await tx.book.update({
      where: { id: bookId },
      data: {
        stok: { decrement: qty },
      },
    });
  }

  async createLoanWithItems(
    data: Prisma.LoanCreateInput,
    tx: Prisma.TransactionClient
  ) {
    return tx.loan.create({
      data,
      include: {
        user: true,
        items: {
          include: { book: true },
        },
      },
    });
  }

  async findAll(
    skip: number,
    take: number,
    where: Prisma.LoanWhereInput,
    orderBy: Prisma.LoanOrderByWithRelationInput
  ) {
    return this.prisma.loan.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        user: true,
        items: { include: { book: true } },
      },
    });
  }

  async countAll(where: Prisma.LoanWhereInput) {
    return this.prisma.loan.count({ where });
  }

  async findById(id: string) {
    return this.prisma.loan.findUnique({
      where: { id },
      include: {
        user: true,
        items: { include: { book: true } },
      },
    });
  }

  async returnLoan(id: string, tx: Prisma.TransactionClient) {
    return tx.loan.update({
      where: { id },
      data: {
        status: "RETURNED",
        tanggalKembali: new Date(),
      },
    });
  }
}
