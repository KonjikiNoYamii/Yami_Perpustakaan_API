export declare const getUserById: (id: string) => Promise<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    email: string;
    password: string;
    kota: string;
    role: string;
}>;
export declare const getAllUsers: (page: number, limit: number) => Promise<{
    users: {
        id: string;
        nama: string;
        createdAt: Date;
        email: string;
        kota: string;
        role: string;
    }[];
    total: number;
    totalPages: number;
    currentPage: number;
}>;
export declare const deleteUser: (id: string) => Promise<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    email: string;
    password: string;
    kota: string;
    role: string;
}>;
//# sourceMappingURL=user.service.d.ts.map