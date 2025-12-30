import * as userRepo from "../repositories/user.repository";
export declare class UserService {
    private prisma;
    constructor(prisma: userRepo.UserRepository);
    getUserById: (id: string) => Promise<{
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
    getAllUsers: (page: number, limit: number) => Promise<{
        users: {
            id: string;
            nama: string;
            createdAt: Date;
            email: string;
            password: string;
            kota: string;
            role: string;
        }[];
        total: number;
        totalPages: number;
        currentPage: number;
    }>;
    deleteUser: (id: string) => Promise<{
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
}
//# sourceMappingURL=user.service.d.ts.map