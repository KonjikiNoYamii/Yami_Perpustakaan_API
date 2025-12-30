export class BookService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAllBooks = async (params) => {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const whereClause = {
            deletedAt: null,
        };
        if (search?.categoryIds?.length) {
            whereClause.categoryId = {
                in: search.categoryIds,
            };
        }
        if (search?.available === true) {
            whereClause.stok = { gt: 0 };
        }
        if (search?.tahunTerbitFrom || search?.tahunTerbitTo) {
            whereClause.tahunTerbit = {};
            if (search.tahunTerbitFrom) {
                whereClause.tahunTerbit.gte = search.tahunTerbitFrom;
            }
            if (search.tahunTerbitTo) {
                whereClause.tahunTerbit.lte = search.tahunTerbitTo;
            }
        }
        const sortCriteria = sortBy
            ? { [sortBy]: sortOrder ?? "desc" }
            : { createdAt: "desc" };
        const books = await this.prisma.findAll(skip, limit, whereClause, sortCriteria);
        const total = await this.prisma.countAll(whereClause);
        return {
            books,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    };
    getBookById = async (id) => {
        const book = await this.prisma.findById(id);
        if (!book) {
            throw new Error("Buku tidak ditemukan!!");
        }
        return book;
    };
    createBook = async (data) => {
        return this.prisma.create({
            nama: data.nama,
            harga: Number(data.harga),
            deskripsi: data.deskripsi,
            stok: Number(data.stok),
            coverUrl: data.coverUrl ?? null,
            tahunTerbit: Number(data.tahunTerbit),
            penulis: data.penulis,
            penerbit: data.penerbit,
            isbn: data.isbn || null,
            category: {
                connect: {
                    id: data.categoryId,
                },
            },
        });
    };
    updateBooks = async (id, data) => {
        const book = {
            nama: String(data?.nama),
            harga: Number(data?.harga),
            deskripsi: String(data?.deskripsi),
            stok: Number(data?.stok),
            coverUrl: String(data?.coverUrl),
            tahunTerbit: Number(data?.tahunTerbit),
            penulis: String(data?.penulis),
            penerbit: String(data?.penerbit),
            isbn: String(data?.isbn),
        };
        return await this.prisma.update(id, book);
    };
    deleteBook = async (id) => {
        return await this.prisma.softDelete(id);
    };
    exec = async () => {
        const stats = await this.prisma.getStats();
        const categoryStats = await this.prisma.getBookByCategoryIdAndPublicationYear();
        return {
            overview: stats,
            by: categoryStats,
        };
    };
}
//# sourceMappingURL=book.service.js.map