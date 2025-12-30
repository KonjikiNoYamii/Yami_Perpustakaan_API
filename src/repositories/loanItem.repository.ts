import { PrismaClient } from "../generated";

export class loanItemRepository {
  constructor(private prisma:PrismaClient){

  }
  // ===============================
  // GET BY LOAN ID (PRIMARY USE)
// ===============================
 findByLoanId = (loanId: string) => {
  return this.prisma.loanItem.findMany({
    where: { loanId },
    include: {
      book: {
        include: {
          category: true,
        },
      },
    },
  });
};

// ===============================
// GET BY ID (ADMIN / DEBUG)
// ===============================
 findById = (id: string) => {
  return this.prisma.loanItem.findUnique({
    where: { id },
    include: {
      loan: {
        include: {
          user: true,
        },
      },
      book: {
        include: {
          category: true,
        },
      },
    },
  });
};

}