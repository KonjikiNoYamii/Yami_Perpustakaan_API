import { body, param } from "express-validator";
export const createBookValidation = [
    body("nama")
        .trim()
        .notEmpty().withMessage("Nama buku wajib diisi")
        .isLength({ min: 3 }).withMessage("Nama buku minimal 3 karakter"),
    body("deskripsi")
        .trim()
        .notEmpty().withMessage("Deskripsi wajib diisi")
        .isLength({ min: 10 }).withMessage("Deskripsi minimal 10 karakter"),
    body("harga")
        .isInt({ min: 1 }).withMessage("Harga harus angka dan lebih dari 0"),
    body("stok")
        .isInt({ min: 0 }).withMessage("Stok tidak boleh negatif"),
    body("categoryId")
        .isUUID().withMessage("Category ID harus UUID valid"),
];
export const getBookByIdValidation = [
    param("id").isUUID().withMessage("ID buku harus UUID valid"),
];
export const updateBookValidation = [
    param("id").isUUID().withMessage("ID buku harus UUID valid"),
    body("nama").optional().isLength({ min: 3 })
        .withMessage("Nama minimal 3 karakter"),
    body("deskripsi").optional().isLength({ min: 10 })
        .withMessage("Deskripsi minimal 10 karakter"),
    body("harga").optional().isInt({ min: 1 })
        .withMessage("Harga harus lebih dari 0"),
    body("stok").optional().isInt({ min: 0 })
        .withMessage("Stok tidak boleh negatif"),
    body("categoryId").optional().isUUID()
        .withMessage("Category ID harus UUID valid"),
];
//# sourceMappingURL=book.validation.js.map