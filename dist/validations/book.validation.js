import { body, param } from "express-validator";
export const getBookByIdValidation = [
    param("id")
        .isUUID()
        .withMessage("ID buku tidak valid")
];
export const createBookValidation = [
    body("nama")
        .notEmpty().withMessage("Nama wajib diisi")
        .isString(),
    body("harga")
        .isInt({ min: 0 })
        .withMessage("Harga harus berupa angka"),
    body("deskripsi")
        .notEmpty().withMessage("Deskripsi wajib diisi"),
    body("stok")
        .isInt({ min: 0 })
        .withMessage("Stok harus berupa angka"),
    body("categoryId")
        .isUUID()
        .withMessage("Category ID tidak valid")
];
export const updateBookValidation = [
    param("id").isUUID().withMessage("ID buku tidak valid"),
    body("nama").optional().isString(),
    body("harga").optional().isInt({ min: 0 }),
    body("deskripsi").optional().isString(),
    body("stok").optional().isInt({ min: 0 }),
    body("categoryId").optional().isUUID()
];
//# sourceMappingURL=book.validation.js.map