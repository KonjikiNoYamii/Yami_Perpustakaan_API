import type { Request, Response } from "express"
import { createUser, deletedUser, getAllUsers, getUserById, searchUser, updateUser } from "../services/peminjam.service"
import { successResponse } from "../utils/response"

export const getAll = (_req:Request, res:Response) =>{
    const {users, total} = getAllUsers()

    successResponse(
        res,
        "User berhasil diambil!",
        {
            users,
            total,
        },
        null,
        200
    )
}

export const search = (req: Request, res: Response) => {
  const {
    nama,
    email,
    kota,
    bukuDipinjamId,
    bukuDipinjamNama,
  } = req.query;

  const result = searchUser(
    nama?.toString(),
    email?.toString(),
    kota?.toString(),
    bukuDipinjamId ? Number(bukuDipinjamId) : undefined,
    bukuDipinjamNama?.toString()
  );

  successResponse(
    res,
    "User berhasil ditemukan!",
    result,
    null,
    200
  );
};



export const getByid = (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }

    const user = getUserById(req.params.id)
    
    successResponse(
        res,
        "User berhasil diambil!",
        user,
        null,
        200
    )
}

export const create = (req:Request, res:Response) =>{
    const {nama , email, kota, bukuDipinjam} = req.body

    const newUser = createUser(
        nama,
        email,
        kota,
        bukuDipinjam
    )
    successResponse(
        res,
        "User berhasil dibuat!",
        newUser,
        null,
        201
    )
}

export const update = (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }

    const user = updateUser(req.params.id, req.body)

    successResponse(
        res,
        "User berhasil di update!",
        user,
        null,
        201
    )
}

export const deleted = (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }

    const deleted = deletedUser(req.params.id)

    successResponse(
        res,
        "User berhasil dihapus!",
        deleted,
        null,
        200
    )
}