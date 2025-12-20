import { Router } from "express";
import * as categoryController from "../controllers/category.controller";
import { adminOnly, authenticate } from "../middlewares/auth.middleware";
const router = Router();
// PUBLIC
router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategory);
// ADMIN ONLY
router.post("/", authenticate, adminOnly, categoryController.createCategory);
router.put("/:id", authenticate, adminOnly, categoryController.updateCategory);
router.delete("/:id", authenticate, adminOnly, categoryController.deleteCategory);
export default router;
//# sourceMappingURL=category.route.js.map