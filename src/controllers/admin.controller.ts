import type { Request, Response } from "express"
import * as adminService from "../services/admin.service"
import { successResponse } from "../utils/response"

export class AdminController{
  constructor(private prisma:adminService.AdminService){

  }
  
 createAdmin = async (req: Request, res: Response) => {
    const { nama, email, password, kota } = req.body
    
    const admin = await this.prisma.createAdmin({
      nama,
      email,
      password,
      kota
  })

  return successResponse(
    res,
    "Admin berhasil dibuat",
    admin,
    null,
    201
  )
}

}