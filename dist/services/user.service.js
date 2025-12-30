export class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getUserById = async (id) => {
        const user = await this.prisma.findById(id);
        if (!user)
            throw new Error("User tidak ditemukan");
        return user;
    };
    getAllUsers = async (page, limit) => {
        const skip = (page - 1) * limit;
        const where = {
            deletedAt: null,
        };
        const users = await this.prisma.findAll(skip, limit, where);
        const total = await this.prisma.countAll(where);
        return {
            users,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    };
    deleteUser = async (id) => {
        return await this.prisma.softDelete(id);
    };
}
//# sourceMappingURL=user.service.js.map