import type { Prisma, PrismaClient } from "../generated/client";
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByEmail: (email: string) => Promise<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        password: string;
        kota: string;
        role: string;
    } | null>;
    findById: (id: string) => Promise<{
        id: string;
        nama: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        email: string;
        password: string;
        kota: string;
        role: string;
    } | null>;
    findAll: (skip: number, take: number, where: Prisma.UserWhereInput) => Promise<{
        id: string;
        nama: string;
        createdAt: Date;
        email: string;
        password: string;
        kota: string;
        role: string;
    }[]>;
    countAll: (where: Prisma.UserWhereInput) => Promise<number>;
    create: (data: Prisma.UserCreateInput) => Promise<{
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
    softDelete: (id: string) => Promise<{
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
//# sourceMappingURL=user.repository.d.ts.map