import * as bookService from "../services/book.service";
import { successResponse } from "../utils/response";
export const getBooks = async (req, res) => {
    const result = await bookService.getAllBooks({
        page: Number(req.query.page) || 1,
        limit: Number(req.query.limit) || 10,
        search: {
            nama: req.query.search,
            categoryId: req.query.categoryId
        },
        sortBy: req.query.sortBy,
        sortOrder: req.query.sortOrder
    });
    successResponse(res, "buku berhasil diambil", result, null, 200);
};
export const getById = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Pamateter tidak ada!");
    }
    const book = await bookService.getBookById(req.params.id);
    successResponse(res, "Buku berhasil diambil", book, null, 200);
};
export const createBook = async (req, res) => {
    const file = req.file;
    if (!file) {
        throw new Error("Image is Required!");
    }
    const { nama, harga, deskripsi, stok, categoryId } = req.body;
    const imageurl = `/public/uploads/${file.filename}`;
    const NewBook = {
        nama,
        harga,
        deskripsi,
        stok,
        categoryId,
        imageurl
    };
    successResponse(res, "Buku berhasil dibuat!!", NewBook, null, 201);
};
export const updateBook = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Pamateter tidak ada!");
    }
    const book = await bookService.updateBook(req.params.id, req.body);
    successResponse(res, "Buku berhasil di update", book, null, 201);
};
export const deleteBook = async (req, res) => {
    if (!req.params.id) {
        throw new Error("Pamateter tidak ada!");
    }
    const book = await bookService.deleteBook(req.params.id);
    successResponse(res, "Buku telah dihapus!", book, null, 200);
};
//# sourceMappingURL=book.controller.js.map