import type { Request, Response } from "express";
import * as BookService from "../services/book.service";
export declare class BookController {
    private prisma;
    constructor(prisma: BookService.BookService);
    getBooks: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    createBook: (req: Request, res: Response) => Promise<void>;
    updateBook: (req: Request, res: Response) => Promise<void>;
    deleteBook: (req: Request, res: Response) => Promise<void>;
    getStats: (_req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=book.controller.d.ts.map