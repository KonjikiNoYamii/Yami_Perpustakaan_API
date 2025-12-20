import type { Prisma, Book } from "../generated/client"
import * as bookRepo from "../repositories/book.repository"

interface FindAllBooksParams {
  page: number
  limit: number
  search?: {
    nama?: string
    categoryId?: string
  }
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

interface BookListResponse {
  books: Book[]
  total: number
  totalPages: number
  currentPage: number
}

export const getAllBooks = async (params:FindAllBooksParams):Promise<BookListResponse> => {
  const { page, limit, search,sortBy,sortOrder} = params

  const skip = (page - 1) * limit

  const whereClause:Prisma.BookWhereInput = {
    deletedAt:null
  }

  if (search?.nama) {
    whereClause.nama ={
      contains:search.nama,
      mode:'insensitive'
    }
  }
   if (search?.categoryId) {
    whereClause.categoryId = search.categoryId
   }

   const sortCriteria:Prisma.BookOrderByWithRelationInput = sortBy ? {[sortBy]: sortOrder ?? "desc"} : {createdAt: 'desc'}

   const books = await bookRepo.findAll(skip, limit, whereClause, sortCriteria)
   const total = await bookRepo.countAll(whereClause)

   return {
    books,
    total,
    totalPages:Math.ceil(total / limit),
    currentPage:page
   }
};

export const getBookById = async (id: string) => {
  const book = await bookRepo.findById(id)
  if (!book) {
    throw new Error("Buku tidak ditemukan!!")
  }
  return book
};

export const createBook = async (data: {
  nama: string
  harga: number
  deskripsi: string
  stok: number
  categoryId: string
  coverUrl?: string
}) => {
  return bookRepo.create({
    nama: data.nama,
    harga: data.harga,
    deskripsi: data.deskripsi,
    stok: data.stok,
    coverUrl: data.coverUrl ?? null,
    category:{
      connect:{
        id:data.categoryId
      }
    }
  })
}

export const updateBook = async (id: string, data: {
  nama: string
  harga: number
  deskripsi: string
  stok: number
  categoryId: string
  coverUrl?: string
}) => {
  const book ={
    nama: data.nama,
    harga: data.harga,
    deskripsi: data.deskripsi,
    stok: data.stok,
    coverUrl: data.coverUrl ?? null,
    category:{
      connect:{
        id:data.categoryId
      }
    }
  }
  return await bookRepo.update(id,book)
};

export const deleteBook = async (id: string) => {
  return await bookRepo.softDelete(id)
};
