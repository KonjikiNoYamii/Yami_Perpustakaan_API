import type { Request, Response } from "express";
import * as categoryService from "../services/category.service.js";
export declare class CategoryController {
    private prisma;
    constructor(prisma: categoryService.CategoryService);
    getCategories: (_req: Request, res: Response) => Promise<void>;
    getCategory: (req: Request, res: Response) => Promise<void>;
    createCategory: (req: Request, res: Response) => Promise<void>;
    updateCategory: (req: Request, res: Response) => Promise<void>;
    deleteCategory: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=category.controller.d.ts.map
