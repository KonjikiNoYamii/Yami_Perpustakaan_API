import { Router } from "express"
import * as loanController from "../controllers/loan.controller"
import { authenticate, adminOnly } from "../middlewares/auth.middleware"
import { validate } from "../utils/validation"
import { checkoutValidation, loanIdValidation } from "../validations/loan.validation"

const router = Router()

// MEMBER
router.post(
  "/checkout",
  authenticate,
  validate(checkoutValidation),
  loanController.checkout
)

// ADMIN
router.get("/", authenticate, adminOnly, loanController.getAllLoans)

router.put(
  "/:id/return",
  authenticate,
  adminOnly,
  validate(loanIdValidation),
  loanController.returnLoan
)

export default router
