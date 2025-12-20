import { param } from "express-validator"

export const userIdValidation = [
  param("id")
    .isUUID()
    .withMessage("User ID tidak valid")
]
