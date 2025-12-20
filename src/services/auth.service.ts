import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import * as userRepo from "../repositories/user.repository"
import config from "../utils/env"

interface RegisterInput {
  nama: string
  email: string
  password: string
  kota: string
}

interface LoginInput {
  email: string
  password: string
}

export const register = async (data: RegisterInput) => {
  const existing = await userRepo.findByEmail(data.email)
  if (existing) throw new Error("Email sudah terdaftar")

  const hashed = await bcrypt.hash(data.password, 10)

  return userRepo.create({
    nama: data.nama,
    email: data.email,
    password: hashed,
    kota: data.kota,
    role: "MEMBER"
  })
}

export const login = async (data: LoginInput) => {
  const user = await userRepo.findByEmail(data.email)
  if (!user) throw new Error("Email atau password salah")

  const valid = await bcrypt.compare(data.password, user.password)
  if (!valid) throw new Error("Email atau password salah")

  const token = jwt.sign(
    { id: user.id, role: user.role },
    config.JWT_SECRET,
    { expiresIn: "1d" }
  )

  return {
    token,
    user: {
      id: user.id,
      nama: user.nama,
      email: user.email,
      role: user.role
    }
  }
}
