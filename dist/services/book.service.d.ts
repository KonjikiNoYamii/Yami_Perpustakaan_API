import type { Prisma, Book } from "../../dist/generated/client";
import * as BookRepo from "../repositories/book.repository";
interface FindAllBooksParams {
    page: number;
    limit: number;
    search?: {
        nama?: string;
        categoryIds?: string[];
        available?: boolean | undefined;
        tahunTerbitFrom?: number | undefined;
        tahunTerbitTo?: number | undefined;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
interface BookListResponse {
    books: Book[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export interface IBookService {
    getAllBooks(params: FindAllBooksParams): Promise<BookListResponse>;
    getBookById(id: string): Promise<Book>;
    createBook(data: {
        nama: string;
        harga: number;
        deskripsi: string;
        stok: number;
        categoryId: string;
        coverUrl?: string;
        tahunTerbit: number;
        penulis: string;
        penerbit: string;
        isbn?: string;
    }): Promise<Book>;
    updateBooks(id: string, data: {
        nama: string;
        harga: number;
        deskripsi: string;
        stok: number;
        categoryId: string;
        coverUrl?: string;
        tahunTerbit: number;
        penulis: string;
        penerbit: string;
        isbn?: string;
    }): Promise<Book>;
    deleteBook(id: string): Promise<Book>;
    exec(): Promise<any>;
}
export declare class BookService implements IBookService {
    private prisma;
    constructor(prisma: BookRepo.BookRepository);
    getAllBooks: (params: FindAllBooksParams) => Promise<BookListResponse>;
    getBookById: (id: string) => Promise<{
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
    createBook: (data: {
        nama: string;
        harga: number;
        deskripsi: string;
        stok: number;
        categoryId: string;
        coverUrl?: string;
        tahunTerbit: number;
        penulis: string;
        penerbit: string;
        isbn?: string;
    }) => Promise<{
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
    updateBooks: (id: string, data: {
        nama?: string;
        harga?: number;
        deskripsi?: string;
        stok?: number;
        categoryId?: string;
        coverUrl?: string;
        tahunTerbit?: number;
        penulis?: string;
        penerbit?: string;
        isbn?: string;
    }) => Promise<{
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
    deleteBook: (id: string) => Promise<{
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
    exec: () => Promise<{
        overview: Prisma.GetBookAggregateType<{
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
        }>;
        by: (Prisma.PickEnumerable<Prisma.BookGroupByOutputType, ("tahunTerbit" | "categoryId")[]> & {
            _count: {
                id: number;
            };
            _avg: {
                harga: number | null;
            };
            _sum: {
                stok: number | null;
            };
        })[];
    }>;
}
export {};
//# sourceMappingURL=book.service.d.ts.map