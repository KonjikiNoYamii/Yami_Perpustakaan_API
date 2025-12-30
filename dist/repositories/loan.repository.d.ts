import type { Prisma, PrismaClient, Loan, User, LoanItem, Book } from "../../dist/generated/client";
export type LoanWithItems = Loan & {
    user: User;
    items: (LoanItem & {
        book: Book;
    })[];
};
export interface ILoanRepository {
    findBooksForCheckout(bookIds: string[], tx: Prisma.TransactionClient): Promise<{
        id: string;
        stok: number;
        nama: string;
    }[]>;
    decrementStock(bookId: string, qty: number, tx: Prisma.TransactionClient): Promise<void>;
    createLoanWithItems(data: Prisma.LoanCreateInput, tx: Prisma.TransactionClient): Promise<Loan>;
    findAll(skip: number, take: number, where: Prisma.LoanWhereInput, orderBy: Prisma.LoanOrderByWithRelationInput): Promise<Loan[]>;
    countAll(where: Prisma.LoanWhereInput): Promise<number>;
    findById(id: string): Promise<LoanWithItems | null>;
    returnLoan(id: string, tx: Prisma.TransactionClient): Promise<Loan>;
}
export declare class LoanRepository implements ILoanRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findBooksForCheckout(bookIds: string[], tx: Prisma.TransactionClient): Promise<{
        id: string;
        nama: string;
        stok: number;
    }[]>;
    decrementStock(bookId: string, qty: number, tx: Prisma.TransactionClient): Promise<void>;
    createLoanWithItems(data: Prisma.LoanCreateInput, tx: Prisma.TransactionClient): Promise<{
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
        items: ({
            book: {
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
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: string;
        tanggalPinjam: Date;
        tanggalKembali: Date | null;
    }>;
    findAll(skip: number, take: number, where: Prisma.LoanWhereInput, orderBy: Prisma.LoanOrderByWithRelationInput): Promise<({
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
        items: ({
            book: {
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
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: string;
        tanggalPinjam: Date;
        tanggalKembali: Date | null;
    })[]>;
    countAll(where: Prisma.LoanWhereInput): Promise<number>;
    findById(id: string): Promise<({
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
        items: ({
            book: {
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
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: string;
        tanggalPinjam: Date;
        tanggalKembali: Date | null;
    }) | null>;
    returnLoan(id: string, tx: Prisma.TransactionClient): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: string;
        tanggalPinjam: Date;
        tanggalKembali: Date | null;
    }>;
}
//# sourceMappingURL=loan.repository.d.ts.map