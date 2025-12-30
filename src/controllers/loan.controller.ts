import type { Request, Response } from "express";
import type { LoanService } from "../services/loan.service";
import { successResponse } from "../utils/response";

export interface ILoanController {
  checkout(req: Request, res: Response): Promise<void>;
  getAllLoans(req: Request, res: Response): Promise<void>;
  returnLoan(req: Request, res: Response): Promise<void>;
}

export class LoanController implements ILoanController {
  constructor(private loanService: LoanService) {}

  // ===============================
  // CHECKOUT
  // ===============================
  checkout = async (req: Request, res: Response) => {
    if (!req.user?.id) {
      throw new Error("User tidak terautentikasi");
    }

    const result = await this.loanService.checkout(
      req.user.id,
      req.body
    );

    successResponse(
      res,
      "Peminjaman berhasil",
      result,
      null,
      201
    );
  };

  // ===============================
  // GET ALL LOAN (ADMIN)
  // ===============================
  getAllLoans = async (req: Request, res: Response) => {
    const result = await this.loanService.getAllLoans({
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
      search: {
        userId: req.query.userId as string,
        status: req.query.status as "BORROWED" | "RETURNED",
      },
      sortBy: req.query.sortBy as string,
      sortOrder: req.query.sortOrder as "asc" | "desc",
    });

    successResponse(
      res,
      "Data loan berhasil diambil",
      result,
      null,
      200
    );
  };

  // ===============================
  // RETURN LOAN
  // ===============================
  returnLoan = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("ID tidak ditemukan!");
    }

    const result = await this.loanService.returnLoan(req.params.id);

    successResponse(
      res,
      "Buku berhasil dikembalikan",
      result,
      null,
      200
    );
  };
}
