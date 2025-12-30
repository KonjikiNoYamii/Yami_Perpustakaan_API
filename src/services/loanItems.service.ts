import * as loanItemRepo from "../repositories/loanItem.repository"

export class LoanItemService {
  constructor(private prisma:loanItemRepo.loanItemRepository){

  }
  
  getLoanItemsByLoanId = async (loanId: string) => {
  return this.prisma.findByLoanId(loanId)
}

 getLoanItemById = async (id: string) => {
  const item = await this.prisma.findById(id)

  if (!item) {
    throw new Error("Loan item tidak ditemukan")
  }

  return item 
}

}