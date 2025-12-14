import { Router } from "express";
import { create, deleted, getAll, getById, search, update } from "../controllers/book.controller";
import { createBookValidation, getBookByIdValidation, updateBookValidation } from "../middlewares/book.validation";
import { validate } from "../utils/validation";

const router = Router()

router.get('/', getAll)

router.get('/search', search)

router.get('/:id', validate(getBookByIdValidation),getById)

router.post('/', validate(createBookValidation),create)

router.put('/:id', validate(updateBookValidation),update)

router.delete('/:id', deleted)

export default router