import bcrypt from "bcrypt"
import * as userRepo from "../repositories/user.repository"

interface CreateAdminInput {
  nama: string
  email: string
  password: string
  kota: string
}

export const createAdmin = async (data: CreateAdminInput) => {
  const existing = await userRepo.findByEmail(data.email)
  if (existing) {
    throw new Error("Email sudah terdaftar")
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  return userRepo.create({
    nama: data.nama,
    email: data.email,
    password: hashedPassword,
    kota: data.kota,
    role: "ADMIN" // 🔐 FIXED
  })
}
