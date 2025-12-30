import type { Prisma, PrismaClient } from "../../dist/generated/client";
export interface ICategoryRepository {
}
export declare class CategoryRepository implements ICategoryRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll: (where?: Prisma.CategoryWhereInput) => Prisma.PrismaPromise<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }[]>;
    findById: (id: string) => Prisma.Prisma__CategoryClient<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null, null, import("../../dist/generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    findByName: (nama: string) => Prisma.Prisma__CategoryClient<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null, null, import("../../dist/generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    create: (data: Prisma.CategoryCreateInput) => Prisma.Prisma__CategoryClient<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, never, import("../../dist/generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    update: (id: string, data: Prisma.CategoryUpdateInput) => Prisma.Prisma__CategoryClient<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, never, import("../../dist/generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    softDelete: (id: string) => Prisma.Prisma__CategoryClient<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, never, import("../../dist/generated/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=category.repository.d.ts.map