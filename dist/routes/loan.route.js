import { Router } from "express";
import * as loanController from "../controllers/loan.controller";
import { adminOnly, authenticate } from '../middlewares/auth.middleware';
const router = Router();
router.post("/checkout", authenticate, loanController.checkout);
router.get("/", authenticate, adminOnly, loanController.getAllLoans);
router.put("/:id/return", authenticate, adminOnly, loanController.returnLoan);
export default router;
//# sourceMappingURL=loan.route.js.map