import { getPrisma } from "../prisma"
import type { Prisma } from "../generated/client"

const prisma = getPrisma()

export const findAll = (where: Prisma.LoanWhereInput) => {
  return prisma.loan.findMany({
    where,
    include: {
      user: true,
      items: {
        include: {
          book: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  })
}

export const findById = (id: string) => {
  return prisma.loan.findFirst({
    where: {
      id,
      deletedAt: null
    },
    include: {
      user: true,
      items: {
        include: {
          book: true
        }
      }
    }
  })
}

export const create = (data: Prisma.LoanCreateInput) => {
  return prisma.loan.create({
    data,
    include: {
      items: {
        include: {
          book: true
        }
      }
    }
  })
}

export const update = (id: string, data: Prisma.LoanUpdateInput) => {
  return prisma.loan.update({
    where: { id },
    data
  })
}
