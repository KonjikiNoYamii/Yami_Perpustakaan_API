import * as userRepo from "../repositories/user.repository"
import type { Prisma } from "../generated/client"

export class UserService {
  constructor(private prisma:userRepo.UserRepository){}
  
  getUserById = async (id: string) => {
  const user = await this.prisma.findById(id)
  if (!user) throw new Error("User tidak ditemukan")
  return user
}

 getAllUsers = async (page: number, limit: number) => {
  const skip = (page - 1) * limit

  const where: Prisma.UserWhereInput = {
    deletedAt: null
  }

  const users = await this.prisma.findAll(skip, limit, where)
  const total = await this.prisma.countAll(where)

  return {
    users,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page
  }
}

 deleteUser = async (id: string) => {
  return await this.prisma.softDelete(id)
}

}