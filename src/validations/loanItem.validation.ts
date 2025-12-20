import { param } from "express-validator"

export const loanItemIdValidation = [
  param("id")
    .isUUID()
    .withMessage("LoanItem ID tidak valid")
]

export const loanIdParamValidation = [
  param("loanId")
    .isUUID()
    .withMessage("Loan ID tidak valid")
]
