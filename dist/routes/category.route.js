import { Router } from "express";
import * as categoryController from "../controllers/category.controller.js";
import { authenticate, adminOnly } from "../middlewares/auth.middleware.js";
import { validate } from "../utils/validation.js";
import { categoryIdValidation, createCategoryValidation, updateCategoryValidation } from "../validations/category.validation.js";
import { CategoryRepository } from "../repositories/category.repository.js";
import prismaInstance from "../database.js";
import { CategoryService } from "../services/category.service.js";
const router = Router();
const repo = new CategoryRepository(prismaInstance);
const service = new CategoryService(repo);
const controller = new categoryController.CategoryController(service);
/**
 * @swagger
 * tags:
 *   - name: Category
 *     description: Manajemen data kategori buku
 */
/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Ambil semua kategori
 *     tags:
 *       - Category
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 */
router.get("/", controller.getCategories);
/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     summary: Ambil kategori berdasarkan ID
 *     tags:
 *       - Category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         example: "b1c2d3e4-xxxx-xxxx-xxxx-xxxxxxxx"
 *     responses:
 *       200:
 *         description: Data kategori ditemukan
 *       404:
 *         description: Kategori tidak ditemukan
 */
router.get("/:id", validate(categoryIdValidation), controller.getCategory);
/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Tambah kategori baru
 *     tags:
 *       - Category
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Fiksi
 *     responses:
 *       201:
 *         description: Kategori berhasil dibuat
 */
router.post("/", authenticate, adminOnly, validate(createCategoryValidation), controller.createCategory);
/**
 * @swagger
 * /api/category/{id}:
 *   put:
 *     summary: Update kategori
 *     tags:
 *       - Category
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Non-Fiksi
 *     responses:
 *       200:
 *         description: Kategori berhasil diupdate
 */
router.put("/:id", authenticate, adminOnly, validate(updateCategoryValidation), controller.updateCategory);
/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Hapus kategori
 *     tags:
 *       - Category
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Kategori berhasil dihapus
 */
router.delete("/:id", authenticate, adminOnly, validate(categoryIdValidation), controller.deleteCategory);
export default router;
//# sourceMappingURL=category.route.js.map
