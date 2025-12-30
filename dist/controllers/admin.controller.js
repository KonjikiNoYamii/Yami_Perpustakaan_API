import { successResponse } from "../utils/response.js";
export class AdminController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    createAdmin = async (req, res) => {
        const { nama, email, password, kota } = req.body;
        const admin = await this.prisma.createAdmin({
            nama,
            email,
            password,
            kota
        });
        return successResponse(res, "Admin berhasil dibuat", admin, null, 201);
    };
}
//# sourceMappingURL=admin.controller.js.map
