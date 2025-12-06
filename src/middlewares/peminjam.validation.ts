import type { Request, Response, NextFunction } from "express";
import {
  body,
  param,
  validationResult,
  type ValidationChain,
} from "express-validator";
import { errorResponse } from "../utils/response";

// Middleware universal untuk menjalankan semua validator
export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validator) => validator.run(req)));

    const result = validationResult(req);
    if (result.isEmpty()) return next();

    const errorList = result.array().map((err) => ({
      field: err.type === "field" ? err.path : "unknown",
      message: err.msg,
    }));

    return errorResponse(res, "Validasi gagal", 400, errorList);
  };
};

export const createUserValidation = [
  body("nama")
    .trim()
    .notEmpty()
    .withMessage("Nama wajib diisi")
    .isLength({ min: 3 })
    .withMessage("Nama minimal 3 karakter"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email wajib diisi")
    .isEmail()
    .withMessage("Format email tidak valid"),

  body("kota")
    .trim()
    .notEmpty()
    .withMessage("Kota wajib diisi"),

  body("bukuDipinjam")
    .isObject()
    .withMessage("bukuDipinjam harus berupa objek")
    .custom((value) => {
      if (!value.id || !value.nama) {
        throw new Error("bukuDipinjam harus berisi id dan nama");
      }
      return true;
    }),
];

export const getUserByIdValidation = [
  param("id").isInt().withMessage("ID harus berupa angka integer"),
];

export const updateUserValidation = [
  param("id").isInt().withMessage("ID harus angka"),

  body("nama")
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Nama minimal 3 karakter"),

  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Format email tidak valid"),

  body("kota")
    .optional()
    .trim(),

  body("bukuDipinjam")
    .optional()
    .isObject()
    .withMessage("bukuDipinjam harus objek")
    .custom((value) => {
      if (value && (!value.id || !value.nama)) {
        throw new Error("bukuDipinjam harus berisi id dan nama");
      }
      return true;
    }),
];
