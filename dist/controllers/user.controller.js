import { successResponse } from "../utils/response.js";
export class UserController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getMe = async (req, res) => {
        if (!req.user?.id)
            throw new Error("Unauthorized");
        const user = await this.prisma.getUserById(req.user.id);
        return successResponse(res, "User ditemukan", user, null, 200);
    };
    getUsers = async (req, res) => {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const result = await this.prisma.getAllUsers(page, limit);
        return successResponse(res, "Daftar user", result, null, 200);
    };
    deleteUser = async (req, res) => {
        if (!req.params.id) {
            throw new Error("ID tidak ditemukan!");
        }
        const user = await this.prisma.deleteUser(req.params.id);
        return successResponse(res, "User dihapus", user, null, 200);
    };
}
//# sourceMappingURL=user.controller.js.map
