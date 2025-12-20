import { getPrisma } from "../prisma";
import * as loanRepo from "../repositories/loan.repository";
const prisma = getPrisma();
// ===============================
// CREATE LOAN (CHECKOUT)
// ===============================
export const checkoutLoan = async (data, userId) => {
    return prisma.$transaction(async (tx) => {
        // 1️⃣ Ambil semua buku sekaligus
        const books = await tx.book.findMany({
            where: {
                id: { in: data.items.map(i => i.bookId) },
                deletedAt: null
            }
        });
        // 2️⃣ Validasi & kurangi stok
        const loanItems = [];
        for (const item of data.items) {
            const book = books.find(b => b.id === item.bookId);
            if (!book) {
                throw new Error("Buku tidak ditemukan");
            }
            if (book.stok < item.qty) {
                throw new Error(`Stok buku ${book.nama} tidak cukup`);
            }
            loanItems.push({
                book: { connect: { id: book.id } },
                qty: item.qty
            });
            await tx.book.update({
                where: { id: book.id },
                data: {
                    stok: { decrement: item.qty }
                }
            });
        }
        // 3️⃣ Buat Loan + LoanItem
        return tx.loan.create({
            data: {
                user: { connect: { id: userId } },
                status: "BORROWED",
                items: {
                    create: loanItems
                }
            },
            include: {
                items: {
                    include: {
                        book: true
                    }
                }
            }
        });
    });
};
// ===============================
// GET ALL LOAN (ADMIN)
// ===============================
export const getAllLoans = async () => {
    return loanRepo.findAll({ deletedAt: null });
};
// ===============================
// RETURN LOAN
// ===============================
export const returnLoan = async (loanId) => {
    return prisma.$transaction(async (tx) => {
        const loan = await tx.loan.findUnique({
            where: { id: loanId },
            include: { items: true }
        });
        if (!loan) {
            throw new Error("Loan tidak ditemukan");
        }
        // Kembalikan stok
        for (const item of loan.items) {
            await tx.book.update({
                where: { id: item.bookId },
                data: {
                    stok: { increment: item.qty }
                }
            });
        }
        return tx.loan.update({
            where: { id: loanId },
            data: {
                status: "RETURNED",
                tanggalKembali: new Date()
            }
        });
    });
};
//# sourceMappingURL=loan.service.js.map