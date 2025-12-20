import type { Request, Response } from "express"
import * as userService from "../services/user.service"
import { successResponse } from "../utils/response"

export const getMe = async (req: Request, res: Response) => {
  if (!req.user?.id) throw new Error("Unauthorized")

  const user = await userService.getUserById(req.user.id)

  return successResponse(res, "User ditemukan", user, null, 200)
}

export const getUsers = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10

  const result = await userService.getAllUsers(page, limit)

  return successResponse(res, "Daftar user", result, null, 200)
}

export const deleteUser = async (req: Request, res: Response) => {
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }
  const user = await userService.deleteUser(req.params.id)

  return successResponse(res, "User dihapus", user, null, 200)
}
