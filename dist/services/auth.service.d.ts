interface RegisterInput {
    nama: string;
    email: string;
    password: string;
    kota: string;
}
interface LoginInput {
    email: string;
    password: string;
}
export declare const register: (data: RegisterInput) => Promise<{
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
export declare const login: (data: LoginInput) => Promise<{
    token: string;
    user: {
        id: string;
        nama: string;
        email: string;
        role: string;
    };
}>;
export {};
//# sourceMappingURL=auth.service.d.ts.map