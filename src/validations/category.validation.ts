import { body, param } from "express-validator"

export const categoryIdValidation = [
  param("id")
    .isUUID()
    .withMessage("ID category tidak valid")
]

export const createCategoryValidation = [
  body("nama")
    .notEmpty()
    .withMessage("Nama category wajib diisi")
    .isString()
]

export const updateCategoryValidation = [
  param("id").isUUID(),
  body("nama").notEmpty().isString()
]
