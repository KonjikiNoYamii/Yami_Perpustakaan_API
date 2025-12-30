import * as userRepo from "../repositories/user.repository.js";
interface CreateAdminInput {
    nama: string;
    email: string;
    password: string;
    kota: string;
}
export declare class AdminService {
    private prisma;
    constructor(prisma: userRepo.UserRepository);
    createAdmin: (data: CreateAdminInput) => Promise<{
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
export {};
//# sourceMappingURL=admin.service.d.ts.map
