import type { Prisma } from "../generated/client";
export declare const findByEmail: (email: string) => Prisma.Prisma__UserClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    email: string;
    password: string;
    kota: string;
    role: string;
} | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const findById: (id: string) => Prisma.Prisma__UserClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    email: string;
    password: string;
    kota: string;
    role: string;
} | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const findAll: (skip: number, take: number, where: Prisma.UserWhereInput) => Prisma.PrismaPromise<{
    id: string;
    nama: string;
    createdAt: Date;
    email: string;
    kota: string;
    role: string;
}[]>;
export declare const countAll: (where: Prisma.UserWhereInput) => Prisma.PrismaPromise<number>;
export declare const create: (data: Prisma.UserCreateInput) => Prisma.Prisma__UserClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    email: string;
    password: string;
    kota: string;
    role: string;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const softDelete: (id: string) => Prisma.Prisma__UserClient<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    email: string;
    password: string;
    kota: string;
    role: string;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
//# sourceMappingURL=user.repository.d.ts.map