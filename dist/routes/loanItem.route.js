import { Router } from "express";
import * as loanItemController from "../controllers/loanItem.controller";
import { adminOnly, authenticate } from "../middlewares/auth.middleware";
const router = Router();
// MEMBER & ADMIN
router.get("/loan/:loanId", authenticate, loanItemController.getLoanItems);
// ADMIN ONLY
router.get("/:id", authenticate, adminOnly, loanItemController.getLoanItem);
export default router;
//# sourceMappingURL=loanItem.route.js.map