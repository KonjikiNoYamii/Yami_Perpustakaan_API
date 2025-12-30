import * as userRepo from "../repositories/user.repository";
interface RegisterInput {
    nama: string;
    email: string;
    password: string;
    kota: string;
    role: "MEMBER" | "ADMIN";
}
interface LoginInput {
    email: string;
    password: string;
}
export declare class AuthService {
    private prisma;
    constructor(prisma: userRepo.UserRepository);
    register: (data: RegisterInput) => Promise<{
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
    login: (data: LoginInput) => Promise<{
        token: string;
        user: {
            id: string;
            nama: string;
            email: string;
            role: string;
        };
    }>;
}
export {};
//# sourceMappingURL=auth.service.d.ts.map