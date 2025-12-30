import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/response.js";
import config from "../utils/env.js";
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return errorResponse(res, "Token tidak ditemukan!", 401);
    }
    const token = authHeader?.split(" ")[1];
    if (!token) {
        throw new Error("Token tidak valid");
    }
    try {
        const payload = jwt.verify(token, config.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (error) {
        errorResponse(res, "Token tidak valid!", 401);
    }
};
export const adminOnly = (req, res, next) => {
    if (req.user?.role !== "ADMIN") {
        return errorResponse(res, "Akses hanya untuk admin", 403);
    }
    next();
};
//# sourceMappingURL=auth.middleware.js.map
