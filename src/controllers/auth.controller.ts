import type { Request, Response } from "express"
import * as authService from "../services/auth.service"
import { successResponse } from "../utils/response"

export class AuthController{
  constructor(private prisma:authService.AuthService){

  }
  
   register = async (req: Request, res: Response) => {
  const user = await this.prisma.register(req.body)

  return successResponse(res, "Register berhasil", user, null, 201)
}

 login = async (req: Request, res: Response) => {
  const result = await this.prisma.login(req.body)

  return successResponse(res, "Login berhasil", result, null, 200)
}

}