import { successResponse } from "../utils/response.js";
export class LoanItemController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // ===============================
    // GET BY LOAN
    // ===============================
    getLoanItems = async (req, res) => {
        const { loanId } = req.params;
        if (!loanId) {
            throw new Error("ID tidak ditemukan!");
        }
        const items = await this.prisma.getLoanItemsByLoanId(loanId);
        successResponse(res, "Detail buku pinjaman", items, null, 200);
    };
    // ===============================
    // GET BY ID (ADMIN)
    // ===============================
    getLoanItem = async (req, res) => {
        if (!req.params.id) {
            throw new Error("ID tidak ditemukan!!");
        }
        const item = await this.prisma.getLoanItemById(req.params.id);
        successResponse(res, "Detail loan item", item, null, 200);
    };
}
//# sourceMappingURL=loanItem.controller.js.map
