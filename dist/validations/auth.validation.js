import { body } from "express-validator";
export const loginValidation = [
    body("email")
        .isEmail()
        .withMessage("Email tidak valid"),
    body("password")
        .notEmpty()
        .withMessage("Password wajib diisi")
];
export const registerValidation = [
    body("nama").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("kota").notEmpty()
];
//# sourceMappingURL=auth.validation.js.map