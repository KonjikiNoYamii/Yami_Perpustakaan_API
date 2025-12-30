import * as loanItemRepo from "../repositories/loanItem.repository";
export declare class LoanItemService {
    private prisma;
    constructor(prisma: loanItemRepo.loanItemRepository);
    getLoanItemsByLoanId: (loanId: string) => Promise<({
        book: {
            category: {
                id: string;
                nama: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            nama: string;
            deskripsi: string;
            harga: number;
            stok: number;
            coverUrl: string | null;
            tahunTerbit: number;
            penulis: string;
            penerbit: string;
            isbn: string | null;
            categoryId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
    } & {
        id: string;
        loanId: string;
        bookId: string;
        qty: number;
    })[]>;
    getLoanItemById: (id: string) => Promise<{
        book: {
            category: {
                id: string;
                nama: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            nama: string;
            deskripsi: string;
            harga: number;
            stok: number;
            coverUrl: string | null;
            tahunTerbit: number;
            penulis: string;
            penerbit: string;
            isbn: string | null;
            categoryId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
        loan: {
            user: {
                id: string;
                nama: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                email: string;
                password: string;
                kota: string;
                role: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            status: string;
            tanggalPinjam: Date;
            tanggalKembali: Date | null;
        };
    } & {
        id: string;
        loanId: string;
        bookId: string;
        qty: number;
    }>;
}
//# sourceMappingURL=loanItems.service.d.ts.map