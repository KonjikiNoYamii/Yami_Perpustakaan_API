export class loanItemRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // ===============================
    // GET BY LOAN ID (PRIMARY USE)
    // ===============================
    findByLoanId = (loanId) => {
        return this.prisma.loanItem.findMany({
            where: { loanId },
            include: {
                book: {
                    include: {
                        category: true,
                    },
                },
            },
        });
    };
    // ===============================
    // GET BY ID (ADMIN / DEBUG)
    // ===============================
    findById = (id) => {
        return this.prisma.loanItem.findUnique({
            where: { id },
            include: {
                loan: {
                    include: {
                        user: true,
                    },
                },
                book: {
                    include: {
                        category: true,
                    },
                },
            },
        });
    };
}
//# sourceMappingURL=loanItem.repository.js.map