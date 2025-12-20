import { getPrisma } from "../prisma";
const prisma = getPrisma();
export const findAll = (where) => {
    return prisma.loan.findMany({
        where,
        include: {
            user: true,
            items: {
                include: {
                    book: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
};
export const findById = (id) => {
    return prisma.loan.findFirst({
        where: {
            id,
            deletedAt: null
        },
        include: {
            user: true,
            items: {
                include: {
                    book: true
                }
            }
        }
    });
};
export const create = (data) => {
    return prisma.loan.create({
        data,
        include: {
            items: {
                include: {
                    book: true
                }
            }
        }
    });
};
export const update = (id, data) => {
    return prisma.loan.update({
        where: { id },
        data
    });
};
//# sourceMappingURL=loan.repository.js.map