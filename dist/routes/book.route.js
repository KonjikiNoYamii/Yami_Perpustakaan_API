import { Router } from "express";
import * as bookControl from '../controllers/book.controller';
import { createBookValidation, getBookByIdValidation, updateBookValidation } from "../middlewares/book.validation";
import { validate } from "../utils/validation";
const router = Router();
router.get('/', bookControl.getBooks);
router.get('/:id', validate(getBookByIdValidation), bookControl.getById);
router.post('/', validate(createBookValidation), bookControl.createBook);
router.put('/:id', validate(updateBookValidation), bookControl.updateBook);
router.delete('/:id', bookControl.deleteBook);
export default router;
//# sourceMappingURL=book.route.js.map