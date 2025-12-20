import * as authService from "../services/auth.service";
import { successResponse } from "../utils/response";
export const register = async (req, res) => {
    const user = await authService.register(req.body);
    return successResponse(res, "Register berhasil", user, null, 201);
};
export const login = async (req, res) => {
    const result = await authService.login(req.body);
    return successResponse(res, "Login berhasil", result, null, 200);
};
//# sourceMappingURL=auth.controller.js.map