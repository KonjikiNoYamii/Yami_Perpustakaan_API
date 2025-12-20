export interface CreateLoanItem {
    bookId: string;
    qty: number;
}
export interface CreateLoan {
    items: CreateLoanItem[];
}
export declare const checkoutLoan: (data: CreateLoan, userId: string) => Promise<{
    items: ({
        book: {
            id: string;
            nama: string;
            harga: number;
            deskripsi: string;
            stok: number;
            coverUrl: string | null;
            categoryId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
    } & {
        id: string;
        qty: number;
        bookId: string;
        loanId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    status: string;
    tanggalPinjam: Date;
    tanggalKembali: Date | null;
    userId: string;
}>;
export declare const getAllLoans: () => Promise<({
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
            harga: number;
            deskripsi: string;
            stok: number;
            coverUrl: string | null;
            categoryId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
    } & {
        id: string;
        qty: number;
        bookId: string;
        loanId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    status: string;
    tanggalPinjam: Date;
    tanggalKembali: Date | null;
    userId: string;
})[]>;
export declare const returnLoan: (loanId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    status: string;
    tanggalPinjam: Date;
    tanggalKembali: Date | null;
    userId: string;
}>;
//# sourceMappingURL=loan.service.d.ts.map