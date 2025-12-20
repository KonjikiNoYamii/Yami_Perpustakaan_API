import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const findAll = (where) => {
    return prisma.category.findMany({
        where: {
            deletedAt: null,
            ...where
        },
        orderBy: {
            nama: "asc"
        }
    });
};
export const findById = (id) => {
    return prisma.category.findUnique({
        where: {
            id,
            deletedAt: null
        }
    });
};
export const findByName = (nama) => {
    return prisma.category.findFirst({
        where: {
            nama,
            deletedAt: null
        }
    });
};
export const create = (data) => {
    return prisma.category.create({
        data
    });
};
export const update = (id, data) => {
    return prisma.category.update({
        where: {
            id,
            deletedAt: null
        },
        data
    });
};
export const softDelete = (id) => {
    return prisma.category.update({
        where: {
            id,
            deletedAt: null
        },
        data: {
            deletedAt: new Date()
        }
    });
};
//# sourceMappingURL=category.repository.js.map