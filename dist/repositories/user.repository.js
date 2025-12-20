import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const findByEmail = (email) => {
    return prisma.user.findUnique({
        where: {
            email,
            deletedAt: null
        }
    });
};
export const findById = (id) => {
    return prisma.user.findFirst({
        where: {
            id,
            deletedAt: null
        }
    });
};
export const findAll = (skip, take, where) => {
    return prisma.user.findMany({
        skip,
        take,
        where,
        select: {
            id: true,
            nama: true,
            email: true,
            kota: true,
            role: true,
            createdAt: true
        }
    });
};
export const countAll = (where) => {
    return prisma.user.count({ where });
};
export const create = (data) => {
    return prisma.user.create({ data });
};
export const softDelete = (id) => {
    return prisma.user.update({
        where: { id },
        data: { deletedAt: new Date() }
    });
};
//# sourceMappingURL=user.repository.js.map