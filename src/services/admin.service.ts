import bcrypt from "bcrypt"
import * as userRepo from "../repositories/user.repository"

interface CreateAdminInput {
  nama: string
  email: string
  password: string
  kota: string
}

export class AdminService{
  constructor(private prisma:userRepo.UserRepository){}
  
   createAdmin = async (data: CreateAdminInput) => {
  const existing = await this.prisma.findByEmail(data.email)
  if (existing) {
    throw new Error("Email sudah terdaftar")
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  return this.prisma.create({
    nama: data.nama,
    email: data.email,
    password: hashedPassword,
    kota: data.kota,
    role: "ADMIN" // 🔐 FIXED
  })
}

}