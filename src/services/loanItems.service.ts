import * as loanItemRepo from "../repositories/loanItem.repository"

export const getLoanItemsByLoanId = async (loanId: string) => {
  return loanItemRepo.findByLoanId(loanId)
}

export const getLoanItemById = async (id: string) => {
  const item = await loanItemRepo.findById(id)

  if (!item) {
    throw new Error("Loan item tidak ditemukan")
  }

  return item 
}
