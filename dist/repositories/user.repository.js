export class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findByEmail = async (email) => {
        return await this.prisma.user.findUnique({
            where: {
                email,
                deletedAt: null,
            },
        });
    };
    findById = async (id) => {
        return await this.prisma.user.findFirst({
            where: {
                id,
                deletedAt: null,
            },
        });
    };
    findAll = async (skip, take, where) => {
        return await this.prisma.user.findMany({
            skip,
            take,
            where,
            select: {
                id: true,
                nama: true,
                password: true,
                email: true,
                kota: true,
                role: true,
                createdAt: true,
            },
        });
    };
    countAll = async (where) => {
        return await this.prisma.user.count({ where });
    };
    create = async (data) => {
        return await this.prisma.user.create({ data });
    };
    softDelete = async (id) => {
        return await this.prisma.user.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    };
}
//# sourceMappingURL=user.repository.js.map