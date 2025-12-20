import * as loanItemRepo from "../repositories/loanItem.repository";
export const getLoanItemsByLoanId = async (loanId) => {
    return loanItemRepo.findByLoanId(loanId);
};
export const getLoanItemById = async (id) => {
    const item = await loanItemRepo.findById(id);
    if (!item) {
        throw new Error("Loan item tidak ditemukan");
    }
    return item;
};
//# sourceMappingURL=loanItems.service.js.map