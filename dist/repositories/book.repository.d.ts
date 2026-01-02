import type { Book, Prisma, PrismaClient } from "@prisma/client";
export declare class BookRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll: (skip: number, take: number, where: Prisma.BookWhereInput, orderBy: Prisma.BookOrderByWithRelationInput) => Promise<Book[]>;
    countAll: (where: Prisma.BookWhereInput) => Promise<number>;
    findById: (id: string) => Promise<({
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
        deskripsi: string;
        harga: number;
        stok: number;
        coverUrl: string | null;
        tahunTerbit: number;
        penulis: string;
        penerbit: string;
        isbn: string | null;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }) | null>;
    create: (data: Prisma.BookCreateInput) => Promise<{
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
        deskripsi: string;
        harga: number;
        stok: number;
        coverUrl: string | null;
        tahunTerbit: number;
        penulis: string;
        penerbit: string;
        isbn: string | null;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    update: (id: string, data: Prisma.BookUpdateInput) => Promise<{
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
        deskripsi: string;
        harga: number;
        stok: number;
        coverUrl: string | null;
        tahunTerbit: number;
        penulis: string;
        penerbit: string;
        isbn: string | null;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    softDelete: (id: string) => Promise<{
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
        deskripsi: string;
        harga: number;
        stok: number;
        coverUrl: string | null;
        tahunTerbit: number;
        penulis: string;
        penerbit: string;
        isbn: string | null;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    getStats: () => Promise<Prisma.GetBookAggregateType<{
        _count: {
            id: true;
        };
        _avg: {
            harga: true;
        };
        _sum: {
            stok: true;
        };
        _min: {
            harga: true;
        };
        _max: {
            harga: true;
        };
    }>>;
    getBookByCategoryIdAndPublicationYear: () => Promise<(Prisma.PickEnumerable<Prisma.BookGroupByOutputType, ("tahunTerbit" | "categoryId")[]> & {
        _count: {
            id: number;
        };
        _avg: {
            harga: number | null;
        };
        _sum: {
            stok: number | null;
        };
    })[]>;
}
//# sourceMappingURL=book.repository.d.ts.map