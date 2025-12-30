import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { UserRepository } from "../repositories/user.repository.js";
import prismaInstance from "../database.js";
import { AuthService } from "../services/auth.service.js";
const router = Router();
const repo = new UserRepository(prismaInstance);
const service = new AuthService(repo);
const controller = new authController.AuthController(service);
/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Autentikasi dan otorisasi pengguna
 */
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrasi user baru
 *     tags:
 *       - Auth
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
 *                 example: silica
 *               email:
 *                 type: string
 *                 example: silica@mail.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       201:
 *         description: User berhasil didaftarkan
 *       400:
 *         description: Data tidak valid / email sudah digunakan
 */
router.post("/register", controller.register);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: silica@mail.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: Login berhasil
 *       401:
 *         description: Email atau password salah
 */
router.post("/login", controller.login);
export default router;
//# sourceMappingURL=auth.route.js.map
