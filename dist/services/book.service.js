import * as bookRepo from "../repositories/book.repository";
export const getAllBooks = async (params) => {
    const { page, limit, search, sortBy, sortOrder } = params;
    const skip = (page - 1) * limit;
    const whereClause = {
        deletedAt: null
    };
    if (search?.nama) {
        whereClause.nama = {
            contains: search.nama,
            mode: 'insensitive'
        };
    }
    if (search?.categoryId) {
        whereClause.categoryId = search.categoryId;
    }
    const sortCriteria = sortBy ? { [sortBy]: sortOrder ?? "desc" } : { createdAt: 'desc' };
    const books = await bookRepo.findAll(skip, limit, whereClause, sortCriteria);
    const total = await bookRepo.countAll(whereClause);
    return {
        books,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page
    };
};
export const getBookById = async (id) => {
    const book = await bookRepo.findById(id);
    if (!book) {
        throw new Error("Buku tidak ditemukan!!");
    }
    return book;
};
export const createBook = async (data) => {
    return bookRepo.create({
        nama: data.nama,
        harga: data.harga,
        deskripsi: data.deskripsi,
        stok: data.stok,
        coverUrl: data.coverUrl ?? null,
        category: {
            connect: {
                id: data.categoryId
            }
        }
    });
};
export const updateBook = async (id, data) => {
    const book = {
        nama: data.nama,
        harga: data.harga,
        deskripsi: data.deskripsi,
        stok: data.stok,
        coverUrl: data.coverUrl ?? null,
        category: {
            connect: {
                id: data.categoryId
            }
        }
    };
    return await bookRepo.update(id, book);
};
export const deleteBook = async (id) => {
    return await bookRepo.softDelete(id);
};
//# sourceMappingURL=book.service.js.map