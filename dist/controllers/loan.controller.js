import * as loanService from "../services/loan.service";
import { successResponse } from "../utils/response";
// ===============================
// CHECKOUT
// ===============================
export const checkout = async (req, res) => {
    if (!req.user?.id) {
        throw new Error("User tidak terautentikasi");
    }
    const result = await loanService.checkoutLoan(req.body, req.user.id);
    successResponse(res, "Peminjaman berhasil", result, null, 201);
};
// ===============================
// GET ALL LOAN (ADMIN)
// ===============================
export const getAllLoans = async (_req, res) => {
    const loans = await loanService.getAllLoans();
    successResponse(res, "Data loan berhasil diambil", loans, null, 200);
};
// ===============================
// RETURN LOAN
// ===============================
export const returnLoan = async (req, res) => {
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!");
    }
    const result = await loanService.returnLoan(req.params.id);
    successResponse(res, "Buku berhasil dikembalikan", result, null, 200);
};
//# sourceMappingURL=loan.controller.js.map