import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { adminOnly, authenticate } from '../middlewares/auth.middleware';
const router = Router();
// Ambil data diri sendiri (MEMBER / ADMIN)
router.get("/me", authenticate, userController.getMe);
// Ambil semua user (ADMIN ONLY)
router.get("/", authenticate, adminOnly, userController.getUsers);
// Soft delete user (ADMIN ONLY)
router.delete("/:id", authenticate, adminOnly, userController.deleteUser);
export default router;
//# sourceMappingURL=user.route.js.map