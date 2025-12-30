import { body, param } from "express-validator";
export const checkoutValidation = [
    body("items")
        .isArray({ min: 1 })
        .withMessage("Items tidak boleh kosong"),
    body("items.*.bookId")
        .isUUID()
        .withMessage("Book ID tidak valid"),
    body("items.*.qty")
        .isInt({ min: 1 })
        .withMessage("Qty minimal 1")
];
export const loanIdValidation = [
    param("id")
        .isUUID()
        .withMessage("Loan ID tidak valid")
];
//# sourceMappingURL=loan.validation.js.map