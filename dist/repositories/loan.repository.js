export class LoanRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findBooksForCheckout(bookIds, tx) {
        return tx.book.findMany({
            where: {
                deletedAt: null,
                id: { in: bookIds },
            },
            select: {
                id: true,
                stok: true,
                nama: true,
            },
        });
    }
    async decrementStock(bookId, qty, tx) {
        await tx.book.update({
            where: { id: bookId },
            data: {
                stok: { decrement: qty },
            },
        });
    }
    async createLoanWithItems(data, tx) {
        return tx.loan.create({
            data,
            include: {
                user: true,
                items: {
                    include: { book: true },
                },
            },
        });
    }
    async findAll(skip, take, where, orderBy) {
        return this.prisma.loan.findMany({
            skip,
            take,
            where,
            orderBy,
            include: {
                user: true,
                items: { include: { book: true } },
            },
        });
    }
    async countAll(where) {
        return this.prisma.loan.count({ where });
    }
    async findById(id) {
        return this.prisma.loan.findUnique({
            where: { id },
            include: {
                user: true,
                items: { include: { book: true } },
            },
        });
    }
    async returnLoan(id, tx) {
        return tx.loan.update({
            where: { id },
            data: {
                status: "RETURNED",
                tanggalKembali: new Date(),
            },
        });
    }
}
//# sourceMappingURL=loan.repository.js.map