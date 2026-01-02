import type { PrismaClient, Loan } from "@prisma/client.js";
import type { ILoanRepository } from "../repositories/loan.repository.js";
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
export declare class LoanService {
  private prisma;
  private loanRepo;
  constructor(prisma: PrismaClient, loanRepo: ILoanRepository);
  checkout: (
    userId: string,
    data: CreateLoanInput
  ) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    userId: string;
    status: string;
    tanggalPinjam: Date;
    tanggalKembali: Date | null;
  }>;
  getAllLoans: (params: FindAllLoanParams) => Promise<LoanListResponse>;
  returnLoan: (loanId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    userId: string;
    status: string;
    tanggalPinjam: Date;
    tanggalKembali: Date | null;
  }>;
}
//# sourceMappingURL=loan.service.d.ts.map
