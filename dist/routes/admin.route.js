import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { adminOnly, authenticate } from "../middlewares/auth.middleware";
import { UserRepository } from "../repositories/user.repository";
import prismaInstance from "../database";
import { AdminService } from "../services/admin.service";
const router = Router();
const repo = new UserRepository(prismaInstance);
const service = new AdminService(repo);
const controller = new AdminController(service);
/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Manajemen admin (khusus admin)
 */
/**
 * @swagger
 * /api/admin:
 *   post:
 *     summary: Membuat akun admin baru
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin_silica
 *               email:
 *                 type: string
 *                 example: admin@library.com
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       201:
 *         description: Admin berhasil dibuat
 *       400:
 *         description: Data tidak valid
 *       401:
 *         description: Tidak terautentikasi
 *       403:
 *         description: Akses ditolak (bukan admin)
 */
router.post("/admin", authenticate, adminOnly, controller.createAdmin);
export default router;
//# sourceMappingURL=admin.route.js.map