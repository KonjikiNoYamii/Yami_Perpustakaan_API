import type { Request, Response } from "express";
import * as loanItemService from "../services/loanItems.service";
export declare class LoanItemController {
    private prisma;
    constructor(prisma: loanItemService.LoanItemService);
    getLoanItems: (req: Request, res: Response) => Promise<void>;
    getLoanItem: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=loanItem.controller.d.ts.map