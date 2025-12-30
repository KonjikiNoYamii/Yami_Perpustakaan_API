import type { Request, Response } from "express";
import * as userService from "../services/user.service.js";
export declare class UserController {
    private prisma;
    constructor(prisma: userService.UserService);
    getMe: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getUsers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=user.controller.d.ts.map
