import { Router } from "express";
import { create, deleted, getAll, getByid, search, update } from "../controllers/perpustakaan.controller";
import { createBooksValidation, getBooksByIdValidation, updateBooksValidation, validate } from "../middlewares/perpustakaan.validation";

const router = Router()

router.get('/', getAll)

router.get('/search', search)

router.get('/:id', validate(getBooksByIdValidation),getByid)

router.post('/', validate(createBooksValidation),create)

router.put('/:id', validate(updateBooksValidation),update)

router.delete('/:id', deleted)

export default router