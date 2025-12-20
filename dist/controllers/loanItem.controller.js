import * as loanItemService from "../services/loanItems.service";
import { successResponse } from "../utils/response";
// ===============================
// GET BY LOAN
// ===============================
export const getLoanItems = async (req, res) => {
    const { loanId } = req.params;
    if (!loanId) {
        throw new Error("ID tidak ditemukan!");
    }
    const items = await loanItemService.getLoanItemsByLoanId(loanId);
    successResponse(res, "Detail buku pinjaman", items, null, 200);
};
// ===============================
// GET BY ID (ADMIN)
// ===============================
export const getLoanItem = async (req, res) => {
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!!");
    }
    const item = await loanItemService.getLoanItemById(req.params.id);
    successResponse(res, "Detail loan item", item, null, 200);
};
//# sourceMappingURL=loanItem.controller.js.map