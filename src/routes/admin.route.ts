import { Router } from "express"
import { createAdmin } from "../controllers/admin.controller"
import { adminOnly, authenticate } from "../middlewares/auth.middleware"

const router = Router()

router.post(
  "/admin",
  authenticate,
  adminOnly,
  createAdmin
)

export default router
