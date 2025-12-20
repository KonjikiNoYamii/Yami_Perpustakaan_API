import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'
import { errorResponse } from '../utils/response'
import  config  from '../utils/env'

export const authenticate =  (req:Request, res:Response, next:NextFunction) =>{
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return errorResponse(
            res,
            "Token tidak ditemukan!",
            401
        )
    }

    const token = authHeader?.split(" ")[1]

    if (!token) {
        throw new Error("Token tidak valid")
    }

    try{
        const payload = jwt.verify(token, config.JWT_SECRET) as {id:string, role:string}

        req.user = payload
        next()
    }catch (error){
        errorResponse(
            res,
            "Token tidak valid!",
            401
        )
    }
}

export const adminOnly = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role !== "ADMIN") {
    return errorResponse(
      res,
      "Akses hanya untuk admin",
      403
    )
  }

  next()
}
