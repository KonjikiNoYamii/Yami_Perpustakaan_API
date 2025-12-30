export class BookRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll = async (skip, take, where, orderBy) => {
        return this.prisma.book.findMany({
            skip,
            take,
            where,
            orderBy,
            include: {
                category: true,
            },
        });
    };
    countAll = async (where) => {
        return this.prisma.book.count({
            where,
        });
    };
    findById = async (id) => {
        return this.prisma.book.findUnique({
            where: {
                id,
                deletedAt: null,
            },
            include: {
                category: true,
            },
        });
    };
    create = async (data) => {
        return this.prisma.book.create({
            data,
            include: {
                category: true
            }
        });
    };
    update = async (id, data) => {
        return this.prisma.book.update({
            where: {
                id,
                deletedAt: null,
            },
            include: {
                category: true,
            },
            data,
        });
    };
    softDelete = async (id) => {
        return this.prisma.book.update({
            where: {
                id,
                deletedAt: null,
            },
            include: {
                category: true,
            },
            data: {
                deletedAt: new Date(),
            },
        });
    };
    getStats = async () => {
        return await this.prisma.book.aggregate({
            _count: { id: true },
            _avg: { harga: true },
            _sum: { stok: true },
            _min: { harga: true },
            _max: { harga: true }
        });
    };
    getBookByCategoryIdAndPublicationYear = async () => {
        return await this.prisma.book.groupBy({
            by: ['categoryId', 'tahunTerbit'],
            _count: { id: true },
            _avg: { harga: true },
            _sum: { stok: true },
            orderBy: [
                { categoryId: 'asc' },
                { tahunTerbit: 'asc' }
            ]
        });
    };
}
//# sourceMappingURL=book.repository.js.map