export class LoanItemService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getLoanItemsByLoanId = async (loanId) => {
        return this.prisma.findByLoanId(loanId);
    };
    getLoanItemById = async (id) => {
        const item = await this.prisma.findById(id);
        if (!item) {
            throw new Error("Loan item tidak ditemukan");
        }
        return item;
    };
}
//# sourceMappingURL=loanItems.service.js.map