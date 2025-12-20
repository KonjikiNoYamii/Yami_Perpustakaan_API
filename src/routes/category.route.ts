import { Router } from "express"
import * as categoryController from "../controllers/category.controller"
import { authenticate, adminOnly } from "../middlewares/auth.middleware"
import { validate } from "../utils/validation"
import { categoryIdValidation, createCategoryValidation, updateCategoryValidation } from "../validations/category.validation"

const router = Router()

// PUBLIC
router.get("/", categoryController.getCategories)
router.get(
  "/:id",
  validate(categoryIdValidation),
  categoryController.getCategory
)

// ADMIN ONLY
router.post(
  "/",
  authenticate,
  adminOnly,
  validate(createCategoryValidation),
  categoryController.createCategory
)

router.put(
  "/:id",
  authenticate,
  adminOnly,
  validate(updateCategoryValidation),
  categoryController.updateCategory
)

router.delete(
  "/:id",
  authenticate,
  adminOnly,
  validate(categoryIdValidation),
  categoryController.deleteCategory
)

export default router
