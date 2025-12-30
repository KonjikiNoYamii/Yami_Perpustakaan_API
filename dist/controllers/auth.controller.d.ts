import type { Request, Response } from "express";
import * as authService from "../services/auth.service";
export declare class AuthController {
    private prisma;
    constructor(prisma: authService.AuthService);
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=auth.controller.d.ts.map