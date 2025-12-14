import { body, param } from "express-validator";

export const createUserValidation = [
  body("nama")
    .trim()
    .notEmpty().withMessage("Nama wajib diisi")
    .isLength({ min: 3 }).withMessage("Nama minimal 3 karakter"),

  body("email")
    .isEmail().withMessage("Email tidak valid"),

  body("kota")
    .trim()
    .notEmpty().withMessage("Kota wajib diisi"),
];

export const getUserByIdValidation = [
  param("id").isUUID().withMessage("ID user harus UUID valid"),
];

export const updateUserValidation = [
  param("id").isUUID().withMessage("ID user harus UUID valid"),

  body("nama").optional().isLength({ min: 3 })
    .withMessage("Nama minimal 3 karakter"),

  body("email").optional().isEmail()
    .withMessage("Email tidak valid"),

  body("kota").optional().notEmpty()
    .withMessage("Kota tidak boleh kosong"),
];
