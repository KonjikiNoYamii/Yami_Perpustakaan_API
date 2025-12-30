export class CategoryRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll = (where) => {
        return this.prisma.category.findMany({
            where: {
                deletedAt: null,
                ...where,
            },
            orderBy: {
                nama: "asc",
            },
        });
    };
    findById = (id) => {
        return this.prisma.category.findUnique({
            where: {
                id,
                deletedAt: null,
            },
        });
    };
    findByName = (nama) => {
        return this.prisma.category.findFirst({
            where: {
                nama,
                deletedAt: null,
            },
        });
    };
    create = (data) => {
        return this.prisma.category.create({
            data,
        });
    };
    update = (id, data) => {
        return this.prisma.category.update({
            where: {
                id,
                deletedAt: null,
            },
            data,
        });
    };
    softDelete = (id) => {
        return this.prisma.category.update({
            where: {
                id,
                deletedAt: null,
            },
            data: {
                deletedAt: new Date(),
            },
        });
    };
}
//# sourceMappingURL=category.repository.js.map