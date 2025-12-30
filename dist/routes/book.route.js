import { Router } from "express";
import * as BookControl from "../controllers/book.controller";
import { authenticate, adminOnly } from "../middlewares/auth.middleware";
import { validate } from "../utils/validation";
import { getBookByIdValidation, updateBookValidation, } from "../validations/book.validation";
import { upload } from "../middlewares/upload.middleware";
import { BookRepository } from "../repositories/book.repository";
import prismaInstance from "../database";
import { BookService } from "../services/book.service";
const router = Router();
const repo = new BookRepository(prismaInstance);
const service = new BookService(repo);
const controller = new BookControl.BookController(service);
/**
 * @swagger
 * tags:
 *   - name: Book
 *     description: Manajemen data buku
 */
/**
 * @swagger
 * /api/book:
 *   get:
 *     summary: Ambil semua buku
 *     tags:
 *       - Book
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           example: nama
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           example: asc
 *       - in: query
 *         name: nama
 *         schema:
 *           type: string
 *           example: Candide
 *     responses:
 *       200:
 *         description: Buku berhasil diambil
 */
router.get("/", controller.getBooks);
/**
 * @swagger
 * /api/book/admin/stats:
 *   get:
 *     summary: Statistik buku (Admin)
 *     tags:
 *       - Book
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Statistik buku berhasil diambil
 */
router.get("/admin/stats", authenticate, adminOnly, controller.getStats);
/**
 * @swagger
 * /api/book/{id}:
 *   get:
 *     summary: Ambil buku berdasarkan ID
 *     tags:
 *       - Book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Buku ditemukan
 *       404:
 *         description: Buku tidak ditemukan
 */
router.get("/:id", validate(getBookByIdValidation), controller.getById);
/**
 * @swagger
 * /api/book:
 *   post:
 *     summary: Tambah buku baru
 *     tags:
 *       - Book
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - harga
 *               - stok
 *               - categoryId
 *               - tahunTerbit
 *               - penulis
 *               - penerbit
 *               - coverUrl
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Buku Filsafat
 *               deskripsi:
 *                 type: string
 *                 example: Buku pemikiran klasik
 *               harga:
 *                 type: integer
 *                 example: 50000
 *               stok:
 *                 type: integer
 *                 example: 10
 *               categoryId:
 *                 type: string
 *                 format: uuid
 *               tahunTerbit:
 *                 type: integer
 *                 example: 2025
 *               penulis:
 *                 type: string
 *                 example: Plato
 *               penerbit:
 *                 type: string
 *                 example: Athena Press
 *               isbn:
 *                 type: string
 *                 example: 978-3-16-148410-0
 *               coverUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Buku berhasil dibuat
 */
router.post("/", authenticate, adminOnly, upload.single("coverUrl"), controller.createBook);
/**
 * @swagger
 * /api/book/{id}:
 *   put:
 *     summary: Update buku
 *     tags:
 *       - Book
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
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               deskripsi:
 *                 type: string
 *               harga:
 *                 type: integer
 *               stok:
 *                 type: integer
 *               categoryId:
 *                 type: string
 *                 format: uuid
 *               tahunTerbit:
 *                 type: integer
 *               penulis:
 *                 type: string
 *               penerbit:
 *                 type: string
 *               isbn:
 *                 type: string
 *     responses:
 *       200:
 *         description: Buku berhasil diperbarui
 */
router.put("/:id", authenticate, adminOnly, validate(updateBookValidation), controller.updateBook);
/**
 * @swagger
 * /api/book/{id}:
 *   delete:
 *     summary: Hapus buku (soft delete)
 *     tags:
 *       - Book
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
 *         description: Buku berhasil dihapus
 */
router.delete("/:id", authenticate, adminOnly, controller.deleteBook);
export default router;
//# sourceMappingURL=book.route.js.map