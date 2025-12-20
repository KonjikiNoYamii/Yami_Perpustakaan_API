export declare const getLoanItemsByLoanId: (loanId: string) => Promise<({
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
})[]>;
export declare const getLoanItemById: (id: string) => Promise<{
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
        harga: number;
        deskripsi: string;
        stok: number;
        coverUrl: string | null;
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
        status: string;
        tanggalPinjam: Date;
        tanggalKembali: Date | null;
        userId: string;
    };
} & {
    id: string;
    qty: number;
    bookId: string;
    loanId: string;
}>;
//# sourceMappingURL=loanItems.service.d.ts.map