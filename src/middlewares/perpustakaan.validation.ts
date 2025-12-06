import type { NextFunction,Response,Request } from "express";
import { body, param, validationResult, type ValidationChain } from "express-validator";
import { errorResponse } from "../utils/response";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const errorList = errors.array().map((err) => ({
      field: err.type === "field" ? err.path : "unknown",
      message: err.msg,
    }));

    return errorResponse(res, "Validasi gagal", 400, errorList);
  };
};

export const createBooksValidation = [
  body("nama")
    .trim()
    .notEmpty()
    .withMessage("Nama Buku wajib diisi")
    .isLength({ min: 3 })
    .withMessage("Nama Buku minimal 3 karakter"),

  body("deskripsi")
    .trim()
    .notEmpty()
    .withMessage("Deskripsi wajib diisi")
    .isLength({ min: 10 })
    .withMessage("Deskripsi minimal 10 karakter"),

  body("harga")
    .isNumeric()
    .withMessage("Harga harus angka")
    .custom((value) => value > 0)
    .withMessage("Harga harus lebih dari 0"),

  body("stok")
    .isNumeric()
    .withMessage("Stok harus angka")
    .custom((value) => value >= 0)
    .withMessage("Stok tidak boleh negatif"),
];

export const getBooksByIdValidation = [
  param("id").isNumeric().withMessage("ID harus angka"),
];

export const updateBooksValidation = [
  param("id").isNumeric().withMessage("ID harus angka"),

  body("nama")
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Nama minimal 3 karakter"),

  body("deskripsi")
    .optional()
    .trim()
    .isLength({ min: 10 })
    .withMessage("Deskripsi minimal 10 karakter"),

  body("harga")
    .optional()
    .isNumeric()
    .withMessage("Harga harus angka")
    .custom((value) => value > 0)
    .withMessage("Harga harus lebih dari 0"),

  body("stok")
    .optional()
    .isNumeric()
    .withMessage("Stok harus angka")
    .custom((value) => value >= 0)
    .withMessage("Stok tidak boleh negatif"),
];
