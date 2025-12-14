import { Router } from "express";
import { create, deleted, getAll, getById, search, update } from "../controllers/category.controller";
import { validate } from "../utils/validation";
import { createCategoryValidation, getCategoryByIdValidation, updateCategoryValidation } from "../middlewares/category.validation";

const router = Router()

router.get("/", getAll);
router.get("/search", search);
router.get("/:id", validate(getCategoryByIdValidation),getById);
router.post("/", validate(createCategoryValidation),create);
router.put("/:id", validate(updateCategoryValidation),update);
router.delete("/:id", deleted);

export default router