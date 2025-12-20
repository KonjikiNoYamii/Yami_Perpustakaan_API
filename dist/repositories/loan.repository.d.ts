import type { Prisma } from "../generated/client";
export declare const findAll: (where: Prisma.LoanWhereInput) => Prisma.PrismaPromise<({
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
export declare const findById: (id: string) => Prisma.Prisma__LoanClient<({
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
}) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const create: (data: Prisma.LoanCreateInput) => Prisma.Prisma__LoanClient<{
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
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const update: (id: string, data: Prisma.LoanUpdateInput) => Prisma.Prisma__LoanClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    status: string;
    tanggalPinjam: Date;
    tanggalKembali: Date | null;
    userId: string;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
//# sourceMappingURL=loan.repository.d.ts.map