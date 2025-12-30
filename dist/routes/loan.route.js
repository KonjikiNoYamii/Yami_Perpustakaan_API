import { Router } from "express";
import * as loanController from "../controllers/loan.controller";
import { authenticate, adminOnly } from "../middlewares/auth.middleware";
import { validate } from "../utils/validation";
import { checkoutValidation, loanIdValidation } from "../validations/loan.validation";
import { LoanRepository } from "../repositories/loan.repository";
import prismaInstance from "../database";
import { LoanService } from "../services/loan.service";
const router = Router();
const repo = new LoanRepository(prismaInstance);
const service = new LoanService(prismaInstance, repo);
const controller = new loanController.LoanController(service);
/**
 * @swagger
 * tags:
 *   - name: Loan
 *     description: Manajemen peminjaman buku
 */
/**
 * @swagger
 * /api/loan/checkout:
 *   post:
 *     summary: Checkout / pinjam buku
 *     tags:
 *       - Loan
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookId
 *             properties:
 *               bookId:
 *                 type: string
 *                 format: uuid
 *                 example: "00d626a8-b0c3-4338-8de4-3e8b8421fdd7"
 *     responses:
 *       201:
 *         description: Buku berhasil dipinjam
 *       400:
 *         description: Buku tidak tersedia atau validasi gagal
 *       401:
 *         description: Tidak terautentikasi
 */
router.post("/checkout", authenticate, validate(checkoutValidation), controller.checkout);
/**
 * @swagger
 * /api/loan:
 *   get:
 *     summary: Ambil semua data peminjaman
 *     tags:
 *       - Loan
 *     responses:
 *       200:
 *         description: Data peminjaman berhasil diambil
 */
router.get("/", controller.getAllLoans);
/**
 * @swagger
 * /api/loan/{id}/return:
 *   put:
 *     summary: Pengembalian buku
 *     tags:
 *       - Loan
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         example: "c2f4b5a1-aaaa-bbbb-cccc-123456789abc"
 *     responses:
 *       200:
 *         description: Buku berhasil dikembalikan
 *       403:
 *         description: Akses ditolak (bukan admin)
 *       404:
 *         description: Data peminjaman tidak ditemukan
 */
router.put("/:id/return", authenticate, adminOnly, validate(loanIdValidation), controller.returnLoan);
export default router;
//# sourceMappingURL=loan.route.js.map