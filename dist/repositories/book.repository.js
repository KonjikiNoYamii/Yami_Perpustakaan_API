import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const findAll = async (skip, take, where, orderBy) => {
    return prisma.book.findMany({
        skip,
        take,
        where,
        orderBy,
        include: {
            category: true
        }
    });
};
export const countAll = (where) => {
    return prisma.book.count({
        where
    });
};
export const findById = async (id) => {
    return prisma.book.findUnique({
        where: {
            id,
            deletedAt: null
        },
        include: {
            category: true
        }
    });
};
export const create = async (data) => {
    return prisma.book.create({
        data
    });
};
export const update = (id, data) => {
    return prisma.book.update({
        where: {
            id,
            deletedAt: null
        },
        include: {
            category: true
        },
        data
    });
};
export const softDelete = async (id) => {
    return prisma.book.update({
        where: {
            id,
            deletedAt: null
        },
        include: {
            category: true
        },
        data: {
            deletedAt: new Date()
        },
    });
};
//# sourceMappingURL=book.repository.js.map