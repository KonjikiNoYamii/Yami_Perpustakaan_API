import { successResponse } from "../utils/response";
export class AuthController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    register = async (req, res) => {
        const user = await this.prisma.register(req.body);
        return successResponse(res, "Register berhasil", user, null, 201);
    };
    login = async (req, res) => {
        const result = await this.prisma.login(req.body);
        return successResponse(res, "Login berhasil", result, null, 200);
    };
}
//# sourceMappingURL=auth.controller.js.map