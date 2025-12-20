import { getPrisma } from "../prisma";
const prisma = getPrisma();
// ===============================
// GET BY LOAN ID (PRIMARY USE)
// ===============================
export const findByLoanId = (loanId) => {
    return prisma.loanItem.findMany({
        where: { loanId },
        include: {
            book: {
                include: {
                    category: true
                }
            }
        }
    });
};
// ===============================
// GET BY ID (ADMIN / DEBUG)
// ===============================
export const findById = (id) => {
    return prisma.loanItem.findUnique({
        where: { id },
        include: {
            loan: {
                include: {
                    user: true
                }
            },
            book: {
                include: {
                    category: true
                }
            }
        }
    });
};
//# sourceMappingURL=loanItem.repository.js.map