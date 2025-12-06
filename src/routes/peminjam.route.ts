import { Router } from "express";
import { create, deleted, getAll, getByid, search, update } from "../controllers/peminjam.controller";
import { createUserValidation, getUserByIdValidation, updateUserValidation, validate } from "../middlewares/peminjam.validation";

const router = Router()

router.get('/', getAll)

router.get('/search', search)

router.get('/:id', validate(getUserByIdValidation),getByid)

router.post('/', validate(createUserValidation),create)

router.put('/:id',validate(updateUserValidation), update)

router.delete('/:id', deleted)

export default router