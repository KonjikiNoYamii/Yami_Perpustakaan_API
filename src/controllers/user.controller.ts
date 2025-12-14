import type { Request, Response } from "express"
import { createUser, deleteUser, getAllUsers, getUserById, searchUser, updateUser } from "../services/user.service"
import { successResponse } from "../utils/response"

export const getAll = async(_req:Request, res:Response) =>{
    const {users, total} = await getAllUsers()

    successResponse(
        res,
        "User berhasil diambil!",
        {
            jumlah:total,
            user:users
        }
    )
}

export const search = async (req: Request, res: Response) => {
    const {nama, email, kota} = req.query

    const result = await searchUser(
        nama?.toString(), email?.toString(), kota?.toString()
    )

    successResponse(
        res,
        "User ditemukan!",
        result,
        null,
        200
    )
};

export const getByid = async (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }

    const user = await getUserById(req.params.id)
    
    successResponse(
        res,
        "User berhasil diambil!",
        user,
        null,
        200
    )
}

export const create = async (req:Request, res:Response) =>{
    const newUser = await createUser(req.body)
    successResponse(
        res,
        "User berhasil dibuat!",
        newUser,
        null,
        201
    )
}

export const update = async (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }

    const user = await updateUser(req.params.id, req.body)

    successResponse(
        res,
        "User berhasil di update!",
        user,
        null,
        201
    )
}

export const deleted = async (req:Request, res:Response) =>{
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!")
    }

    const deleted = await deleteUser(req.params.id)

    successResponse(
        res,
        "User berhasil dihapus!",
        deleted,
        null,
        200
    )
}