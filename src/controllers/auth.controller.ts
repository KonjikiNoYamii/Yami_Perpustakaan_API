import type { Request, Response } from "express"
import * as authService from "../services/auth.service"
import { successResponse } from "../utils/response"

export const register = async (req: Request, res: Response) => {
  const user = await authService.register(req.body)

  return successResponse(res, "Register berhasil", user, null, 201)
}

export const login = async (req: Request, res: Response) => {
  const result = await authService.login(req.body)

  return successResponse(res, "Login berhasil", result, null, 200)
}
