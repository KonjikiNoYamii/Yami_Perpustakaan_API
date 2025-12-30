import { Router } from "express";
import * as loanItemController from "../controllers/loanItem.controller.js";
import { authenticate, adminOnly } from "../middlewares/auth.middleware.js";
import { validate } from "../utils/validation.js";
import { loanIdParamValidation, loanItemIdValidation } from "../validations/loanItem.validation.js";
import { loanItemRepository } from "../repositories/loanItem.repository.js";
import prismaInstance from "../database.js";
import { LoanItemService } from "../services/loanItems.service.js";
const router = Router();
const repo = new loanItemRepository(prismaInstance);
const service = new LoanItemService(repo);
const controller = new loanItemController.LoanItemController(service);
/**
 * @swagger
 * tags:
 *   - name: LoanItem
 *     description: Detail item peminjaman buku
 */
/**
 * @swagger
 * /api/loan-items/loan/{loanId}:
 *   get:
 *     summary: Ambil semua item berdasarkan ID peminjaman
 *     tags:
 *       - LoanItem
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: loanId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         example: "00d626a8-b0c3-4338-8de4-3e8b8421fdd7"
 *     responses:
 *       200:
 *         description: Daftar item peminjaman berhasil diambil
 *       401:
 *         description: Tidak terautentikasi
 *       404:
 *         description: Data peminjaman tidak ditemukan
 */
router.get("/loan/:loanId", authenticate, validate(loanIdParamValidation), controller.getLoanItems);
/**
 * @swagger
 * /api/loan-items/{id}:
 *   get:
 *     summary: Ambil detail satu item peminjaman
 *     tags:
 *       - LoanItem
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
 *         description: Detail item peminjaman ditemukan
 *       403:
 *         description: Akses ditolak (bukan admin)
 *       404:
 *         description: Item peminjaman tidak ditemukan
 */
router.get("/:id", authenticate, adminOnly, validate(loanItemIdValidation), controller.getLoanItem);
export default router;
//# sourceMappingURL=loanItem.route.js.map
