import { Router } from "express"
import * as loanItemController from "../controllers/loanItem.controller"
import { authenticate, adminOnly } from "../middlewares/auth.middleware"
import { validate } from "../utils/validation"
import { loanIdParamValidation, loanItemIdValidation } from "../validations/loanItem.validation"

const router = Router()

// MEMBER & ADMIN
router.get(
  "/loan/:loanId",
  authenticate,
  validate(loanIdParamValidation),
  loanItemController.getLoanItems
)

// ADMIN ONLY
router.get(
  "/:id",
  authenticate,
  adminOnly,
  validate(loanItemIdValidation),
  loanItemController.getLoanItem
)

export default router
