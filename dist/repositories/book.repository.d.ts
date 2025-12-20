import type { Prisma } from "../generated/client";
import type { BookCreateInput, BookUpdateInput } from "../generated/models";
export declare const findAll: (skip: number, take: number, where: Prisma.BookWhereInput, orderBy: Prisma.BookOrderByWithRelationInput) => Promise<({
    category: {
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
} & {
    id: string;
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    coverUrl: string | null;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
})[]>;
export declare const countAll: (where: Prisma.BookWhereInput) => Prisma.PrismaPromise<number>;
export declare const findById: (id: string) => Promise<({
    category: {
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
} & {
    id: string;
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    coverUrl: string | null;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}) | null>;
export declare const create: (data: BookCreateInput) => Promise<{
    id: string;
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    coverUrl: string | null;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
export declare const update: (id: string, data: BookUpdateInput) => Prisma.Prisma__BookClient<{
    category: {
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
} & {
    id: string;
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    coverUrl: string | null;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const softDelete: (id: string) => Promise<{
    category: {
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
} & {
    id: string;
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    coverUrl: string | null;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
//# sourceMappingURL=book.repository.d.ts.map