import { body, param } from "express-validator";
export const createCategoryValidation = [
    body("nama")
        .trim()
        .notEmpty().withMessage("Nama kategori wajib diisi")
        .isLength({ min: 3 }).withMessage("Nama kategori minimal 3 karakter"),
];
export const getCategoryByIdValidation = [
    param("id").isUUID().withMessage("ID kategori harus UUID valid"),
];
export const updateCategoryValidation = [
    param("id").isUUID().withMessage("ID kategori harus UUID valid"),
    body("nama")
        .trim()
        .notEmpty().withMessage("Nama kategori wajib diisi")
        .isLength({ min: 3 }).withMessage("Nama kategori minimal 3 karakter"),
];
//# sourceMappingURL=category.validation.js.map