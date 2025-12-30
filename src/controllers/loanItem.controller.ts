import type { Request, Response } from "express"
import * as loanItemService from "../services/loanItems.service"
import { successResponse } from "../utils/response"

export class LoanItemController {
  constructor(private prisma:loanItemService.LoanItemService){

  }
  
  // ===============================
// GET BY LOAN
// ===============================
 getLoanItems = async (req: Request, res: Response) => {
  const { loanId } = req.params
  if (!loanId) {
    throw new Error("ID tidak ditemukan!")
  }

  const items = await this.prisma.getLoanItemsByLoanId(loanId)

  successResponse(
    res,
    "Detail buku pinjaman",
    items,
    null,
    200
  )
}

// ===============================
// GET BY ID (ADMIN)
// ===============================
 getLoanItem = async (req: Request, res: Response) => {
if (!req.params.id) {
    throw new Error("ID tidak ditemukan!!")
}
  const item = await this.prisma.getLoanItemById(req.params.id)

  successResponse(
    res,
    "Detail loan item",
    item,
    null,
    200
  )
}

}