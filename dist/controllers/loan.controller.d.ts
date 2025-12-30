import type { Request, Response } from "express";
import type { LoanService } from "../services/loan.service.js";
export interface ILoanController {
    checkout(req: Request, res: Response): Promise<void>;
    getAllLoans(req: Request, res: Response): Promise<void>;
    returnLoan(req: Request, res: Response): Promise<void>;
}
export declare class LoanController implements ILoanController {
    private loanService;
    constructor(loanService: LoanService);
    checkout: (req: Request, res: Response) => Promise<void>;
    getAllLoans: (req: Request, res: Response) => Promise<void>;
    returnLoan: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=loan.controller.d.ts.map
