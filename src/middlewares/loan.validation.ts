import { body, param } from "express-validator";

export const createLoanValidation = [
  body("userId")
    .isUUID().withMessage("User ID harus UUID valid"),

  body("bookId")
    .isUUID().withMessage("Book ID harus UUID valid"),

  body("tanggalKembali")
    .optional()
    .isISO8601().withMessage("Tanggal kembali harus format tanggal valid"),
];

export const getLoanByIdValidation = [
  param("id").isUUID().withMessage("ID loan harus UUID valid"),
];

export const updateLoanValidation = [
  param("id").isUUID().withMessage("ID loan harus UUID valid"),

  body("tanggalKembali")
    .optional()
    .isISO8601().withMessage("Tanggal kembali harus format tanggal valid"),
];
