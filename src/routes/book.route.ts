import { Router } from "express"
import * as bookControl from "../controllers/book.controller"
import { authenticate, adminOnly } from "../middlewares/auth.middleware"
import { validate } from "../utils/validation"
import { createBookValidation, getBookByIdValidation, updateBookValidation } from "../validations/book.validation"

const router = Router()

// PUBLIC
router.get("/", bookControl.getBooks)
router.get(
  "/:id",
  validate(getBookByIdValidation),
  bookControl.getBooks
)

// ADMIN ONLY
router.post(
  "/",
  authenticate,
  adminOnly,
  validate(createBookValidation),
  bookControl.createBook
)

router.put(
  "/:id",
  authenticate,
  adminOnly,
  validate(updateBookValidation),
  bookControl.updateBook
)

router.delete(
  "/:id",
  authenticate,
  adminOnly,
  bookControl.deleteBook
)

export default router
