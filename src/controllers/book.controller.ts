import type { Request, Response } from "express"
import * as bookService from "../services/book.service"
import { successResponse } from "../utils/response"

export const getBooks = async (req: Request, res: Response) => {
  const result = await bookService.getAllBooks({
    page: Number(req.query.page) || 1,
    limit: Number(req.query.limit) || 10,
    search: {
      nama: req.query.search as string,
      categoryId: req.query.categoryId as string
    },
    sortBy: req.query.sortBy as string,
    sortOrder: req.query.sortOrder as "asc" | "desc"
  })

  successResponse(
    res,
    "buku berhasil diambil",
    result,
    null,
    200
  )
}

export const getById= async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Pamateter tidak ada!")
  }
  const book = await bookService.getBookById(req.params.id)

  successResponse(
    res,
    "Buku berhasil diambil",
    book,
    null,
    200
  )
}

export const createBook = async (req: Request, res: Response) => {
  const file = req.file
  if (!file) {
    throw new Error("Image is Required!")
  }

  const {nama, harga, deskripsi, stok,categoryId} = req.body

  const imageurl = `/public/uploads/${file.filename}`

  const NewBook = {
    nama,
    harga,
    deskripsi,
    stok,
    categoryId,
    imageurl
  }

  successResponse(
    res,
    "Buku berhasil dibuat!!",
    NewBook,
    null,
    201
  )
}

export const updateBook = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Pamateter tidak ada!")
  }
  const book = await bookService.updateBook(req.params.id, req.body)
  successResponse(
    res,
    "Buku berhasil di update",
    book,
    null,
    201
  )
}

export const deleteBook = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Pamateter tidak ada!")
  }
  const book = await bookService.deleteBook(req.params.id)
  successResponse(
    res,
    "Buku telah dihapus!",
    book,
    null,
    200
  )
}
