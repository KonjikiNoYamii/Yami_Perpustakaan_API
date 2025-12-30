import type { Request, Response } from "express";
import * as adminService from "../services/admin.service";
export declare class AdminController {
    private prisma;
    constructor(prisma: adminService.AdminService);
    createAdmin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=admin.controller.d.ts.map