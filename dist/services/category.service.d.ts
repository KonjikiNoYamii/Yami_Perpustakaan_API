import { Prisma } from "../../dist/generated/index.js";
import * as categoryRepo from "../repositories/category.repository.js";
export declare class CategoryService {
    private prisma;
    constructor(prisma: categoryRepo.CategoryRepository);
    getAllCategories: () => Promise<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }[]>;
    getCategoryById: (id: string) => Promise<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    createCategory: (nama: string) => Promise<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    updateCategory: (id: string, nama: Prisma.CategoryUpdateInput) => Promise<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    deleteCategory: (id: string) => Promise<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
}
//# sourceMappingURL=category.service.d.ts.map
