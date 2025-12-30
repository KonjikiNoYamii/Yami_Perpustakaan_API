import { Router } from "express"
import * as userController from "../controllers/user.controller"
import { authenticate, adminOnly } from "../middlewares/auth.middleware"
import { validate } from "../utils/validation"
import { userIdValidation } from "../validations/user.validation"
import { UserRepository } from "../repositories/user.repository"
import prismaInstance from "../database"
import { UserService } from "../services/user.service"

const router = Router()

const repo = new UserRepository(prismaInstance)
const service = new UserService(repo)
const controller = new userController.UserController(service) 

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Manajemen data pengguna
 */

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: Ambil data user yang sedang login
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Data user berhasil diambil
 *       401:
 *         description: Tidak terautentikasi
 */
router.get("/me", authenticate, controller.getMe);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Ambil semua data user (admin only)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar user berhasil diambil
 *       403:
 *         description: Akses ditolak (bukan admin)
 */
router.get("/", authenticate, adminOnly, controller.getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Hapus user (soft delete)
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         example: "89aa195b-4c85-47b5-bba3-070ee0764ff3"
 *     responses:
 *       200:
 *         description: User berhasil dihapus
 *       403:
 *         description: Akses ditolak (bukan admin)
 *       404:
 *         description: User tidak ditemukan
 */
router.delete(
  "/:id",
  authenticate,
  adminOnly,
  validate(userIdValidation),
  controller.deleteUser
);

export default router
