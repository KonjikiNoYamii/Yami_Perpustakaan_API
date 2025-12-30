import type { Request, Response } from "express"
import * as BookService from "../services/book.service"
import { successResponse } from "../utils/response"

export class BookController {
  constructor(private prisma : BookService.BookService){
  }
  
  getBooks = async (req: Request, res: Response) => {
  const result = await this.prisma.getAllBooks({
    page: Number(req.query.page) || 1,
    limit: Number(req.query.limit) || 10,
    search: {
      nama: req.query.search as string,
      categoryIds: req.query.categoryId as string[],
      available:req.query.available as boolean | undefined,
      tahunTerbitFrom:req.query.tahunTerbitFrom as number | undefined,
      tahunTerbitTo:req.query.tahunTerbitTo as number | undefined
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

getById= async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Pamateter tidak ada!")
  }
  const book = await this.prisma.getBookById(req.params.id)

  successResponse(
    res,
    "Buku berhasil diambil",
    book,
    null,
    200
  )
}

createBook = async (req: Request, res: Response) => {
  const file = req.file
  if (!file) {
    throw new Error("Image is Required!")
  }

  const {nama, harga, deskripsi, stok,categoryId, tahunTerbit, penerbit, penulis,isbn} = req.body

  const coverUrl = `/public/uploads/${file.filename}`

  const NewBook = await this.prisma.createBook({
    nama:nama,
    harga:harga,
    deskripsi:deskripsi,
    stok:stok,
    categoryId:categoryId,
    coverUrl:coverUrl,
    tahunTerbit:tahunTerbit,
    penulis:penulis,
    penerbit:penerbit,
    isbn:isbn || null
  })

  successResponse(
    res,
    "Buku berhasil dibuat!!",
    NewBook,
    null,
    201
  )
}

updateBook = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Pamateter tidak ada!")
  }
  const book = await this.prisma.updateBooks(req.params.id, req.body)
  successResponse(
    res,
    "Buku berhasil di update",
    book,
    null,
    200
  )
}

deleteBook = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Pamateter tidak ada!")
  }
  const book = await this.prisma.deleteBook(req.params.id)
  successResponse(
    res,
    "Buku telah dihapus!",
    book,
    null,
    200
  )
}

getStats = async (_req:Request, res:Response) =>{
  const book = await this.prisma.exec()

  successResponse(
    res,
    "Buku telah diambil!",
    book,
    null,
    200
  )
}

}