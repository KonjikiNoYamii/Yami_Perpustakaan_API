import type { Prisma } from "../generated/client";
export declare const findAll: (where?: Prisma.CategoryWhereInput) => Prisma.PrismaPromise<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}[]>;
export declare const findById: (id: string) => Prisma.Prisma__CategoryClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
} | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const findByName: (nama: string) => Prisma.Prisma__CategoryClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
} | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const create: (data: Prisma.CategoryCreateInput) => Prisma.Prisma__CategoryClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const update: (id: string, data: Prisma.CategoryUpdateInput) => Prisma.Prisma__CategoryClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const softDelete: (id: string) => Prisma.Prisma__CategoryClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
//# sourceMappingURL=category.repository.d.ts.map