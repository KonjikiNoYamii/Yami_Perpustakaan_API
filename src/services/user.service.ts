import * as userRepo from "../repositories/user.repository"
import type { Prisma } from "../generated/client"

export const getUserById = async (id: string) => {
  const user = await userRepo.findById(id)
  if (!user) throw new Error("User tidak ditemukan")
  return user
}

export const getAllUsers = async (page: number, limit: number) => {
  const skip = (page - 1) * limit

  const where: Prisma.UserWhereInput = {
    deletedAt: null
  }

  const users = await userRepo.findAll(skip, limit, where)
  const total = await userRepo.countAll(where)

  return {
    users,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page
  }
}

export const deleteUser = async (id: string) => {
  await getUserById(id)
  return userRepo.softDelete(id)
}
