import type { Book } from "../generated/client";
interface FindAllBooksParams {
    page: number;
    limit: number;
    search?: {
        nama?: string;
        categoryId?: string;
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
export declare const getAllBooks: (params: FindAllBooksParams) => Promise<BookListResponse>;
export declare const getBookById: (id: string) => Promise<{
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
export declare const createBook: (data: {
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    categoryId: string;
    coverUrl?: string;
}) => Promise<{
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
export declare const updateBook: (id: string, data: {
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    categoryId: string;
    coverUrl?: string;
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
    harga: number;
    deskripsi: string;
    stok: number;
    coverUrl: string | null;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
export declare const deleteBook: (id: string) => Promise<{
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
export {};
//# sourceMappingURL=book.service.d.ts.map