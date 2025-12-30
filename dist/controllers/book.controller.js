import { successResponse } from "../utils/response";
export class BookController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getBooks = async (req, res) => {
        const result = await this.prisma.getAllBooks({
            page: Number(req.query.page) || 1,
            limit: Number(req.query.limit) || 10,
            search: {
                nama: req.query.search,
                categoryIds: req.query.categoryId,
                available: req.query.available,
                tahunTerbitFrom: req.query.tahunTerbitFrom,
                tahunTerbitTo: req.query.tahunTerbitTo
            },
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
        });
        successResponse(res, "buku berhasil diambil", result, null, 200);
    };
    getById = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Pamateter tidak ada!");
        }
        const book = await this.prisma.getBookById(req.params.id);
        successResponse(res, "Buku berhasil diambil", book, null, 200);
    };
    createBook = async (req, res) => {
        const file = req.file;
        if (!file) {
            throw new Error("Image is Required!");
        }
        const { nama, harga, deskripsi, stok, categoryId, tahunTerbit, penerbit, penulis, isbn } = req.body;
        const coverUrl = `/public/uploads/${file.filename}`;
        const NewBook = await this.prisma.createBook({
            nama: nama,
            harga: harga,
            deskripsi: deskripsi,
            stok: stok,
            categoryId: categoryId,
            coverUrl: coverUrl,
            tahunTerbit: tahunTerbit,
            penulis: penulis,
            penerbit: penerbit,
            isbn: isbn || null
        });
        successResponse(res, "Buku berhasil dibuat!!", NewBook, null, 201);
    };
    updateBook = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Pamateter tidak ada!");
        }
        const book = await this.prisma.updateBooks(req.params.id, req.body);
        successResponse(res, "Buku berhasil di update", book, null, 200);
    };
    deleteBook = async (req, res) => {
        if (!req.params.id) {
            throw new Error("Pamateter tidak ada!");
        }
        const book = await this.prisma.deleteBook(req.params.id);
        successResponse(res, "Buku telah dihapus!", book, null, 200);
    };
    getStats = async (_req, res) => {
        const book = await this.prisma.exec();
        successResponse(res, "Buku telah diambil!", book, null, 200);
    };
}
//# sourceMappingURL=book.controller.js.map