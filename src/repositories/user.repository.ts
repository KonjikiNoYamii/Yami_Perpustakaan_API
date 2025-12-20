import { getPrisma } from "../prisma"
import type { Prisma } from "../generated/client"

const prisma = getPrisma()

export const findByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
      deletedAt: null
    }
  })
}

export const findById = (id: string) => {
  return prisma.user.findFirst({
    where: {
      id,
      deletedAt: null
    }
  })
}

export const findAll = (
  skip: number,
  take: number,
  where: Prisma.UserWhereInput
) => {
  return prisma.user.findMany({
    skip,
    take,
    where,
    select: {
      id: true,
      nama: true,
      password:true,
      email: true,
      kota: true,
      role: true,
      createdAt: true
    }
  })
}

export const countAll = (where: Prisma.UserWhereInput) => {
  return prisma.user.count({ where })
}

export const create = (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data })
}

export const softDelete = (id: string) => {
  return prisma.user.update({
    where: { id },
    data: { deletedAt: new Date() }
  })
}
