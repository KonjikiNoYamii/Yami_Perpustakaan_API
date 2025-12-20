import { Router } from "express"
import * as userController from "../controllers/user.controller"
import { authenticate, adminOnly } from "../middlewares/auth.middleware"
import { validate } from "../utils/validation"
import { userIdValidation } from "../validations/user.validation"

const router = Router()

// MEMBER & ADMIN
router.get("/me", authenticate, userController.getMe)

// ADMIN ONLY
router.get("/", authenticate, adminOnly, userController.getUsers)

router.delete(
  "/:id",
  authenticate,
  adminOnly,
  validate(userIdValidation),
  userController.deleteUser
)

export default router
