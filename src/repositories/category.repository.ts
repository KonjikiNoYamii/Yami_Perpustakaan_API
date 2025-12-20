import { getPrisma } from "../prisma"
import type { Prisma } from "../generated/client"

const prisma = getPrisma()

export const findAll = (where?: Prisma.CategoryWhereInput) => {
  return prisma.category.findMany({
    where: {
      deletedAt: null,
      ...where
    },
    orderBy: {
      nama: "asc"
    }
  })
}

export const findById = (id: string) => {
  return prisma.category.findUnique({
    where: {
      id,
      deletedAt: null
    }
  })
}

export const findByName = (nama: string) => {
  return prisma.category.findFirst({
    where: {
      nama,
      deletedAt: null
    }
  })
}

export const create = (data: Prisma.CategoryCreateInput) => {
  return prisma.category.create({
    data
  })
}

export const update = (
  id: string,
  data: Prisma.CategoryUpdateInput
) => {
  return prisma.category.update({
    where: {
      id,
      deletedAt: null
    },
    data
  })
}

export const softDelete = (id: string) => {
  return prisma.category.update({
    where: {
      id,
      deletedAt: null
    },
    data: {
      deletedAt: new Date()
    }
  })
}
