import { successResponse } from "../utils/response";
export class LoanController {
    loanService;
    constructor(loanService) {
        this.loanService = loanService;
    }
    // ===============================
    // CHECKOUT
    // ===============================
    checkout = async (req, res) => {
        if (!req.user?.id) {
            throw new Error("User tidak terautentikasi");
        }
        const result = await this.loanService.checkout(req.user.id, req.body);
        successResponse(res, "Peminjaman berhasil", result, null, 201);
    };
    // ===============================
    // GET ALL LOAN (ADMIN)
    // ===============================
    getAllLoans = async (req, res) => {
        const result = await this.loanService.getAllLoans({
            page: Number(req.query.page) || 1,
            limit: Number(req.query.limit) || 10,
            search: {
                userId: req.query.userId,
                status: req.query.status,
            },
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder,
        });
        successResponse(res, "Data loan berhasil diambil", result, null, 200);
    };
    // ===============================
    // RETURN LOAN
    // ===============================
    returnLoan = async (req, res) => {
        if (!req.params.id) {
            throw new Error("ID tidak ditemukan!");
        }
        const result = await this.loanService.returnLoan(req.params.id);
        successResponse(res, "Buku berhasil dikembalikan", result, null, 200);
    };
}
//# sourceMappingURL=loan.controller.js.map