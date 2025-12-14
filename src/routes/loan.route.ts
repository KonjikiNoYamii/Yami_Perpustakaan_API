import { Router } from "express";
import { create, deleted, getAll, getById, search, update } from "../controllers/loan.controller";
import { validate } from "../utils/validation";
import { createLoanValidation, getLoanByIdValidation, updateLoanValidation } from "../middlewares/loan.validation";

const router = Router()

router.get("/", getAll);
router.get("/search", search);
router.get("/:id",validate(getLoanByIdValidation), getById);
router.post("/", validate(createLoanValidation),create);
router.put("/:id",validate(updateLoanValidation), update);
router.delete("/:id", deleted);

export default router