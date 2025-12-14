import type { Request, Response } from "express";
import * as service from "../services/loan.service";
import { successResponse } from "../utils/response";

export const getAll = async (_: Request, res: Response) => {
  const data = await service.getAllLoans();
  successResponse(res, "Loan diambil", data);
};

export const search = async (req: Request, res: Response) => {
  const { userId, bookId } = req.query;

  const loans = await service.searchLoan(
    userId?.toString(),
    bookId?.toString()
  );

  successResponse(res, "Loan ditemukan", loans);
};

export const getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parammter tidak ditemukan !!")
    }
  const loan = await service.getLoanById(req.params.id);
  successResponse(res, "Detail loan", loan);
};

export const create = async (req: Request, res: Response) => {
  const loan = await service.createLoan(req.body);
  successResponse(res, "Loan dibuat", loan, null, 201);
};

export const update = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parammter tidak ditemukan !!")
    }
  const loan = await service.updateLoan(req.params.id, req.body);
  successResponse(res, "Loan diupdate", loan);
};

export const deleted = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("Parammter tidak ditemukan !!")
    }
  const loan = await service.deleteLoan(req.params.id);
  successResponse(res, "Loan dihapus", loan);
};
