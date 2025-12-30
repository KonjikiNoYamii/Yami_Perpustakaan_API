import type { Prisma, Book } from "../generated/client";
import * as BookRepo from "../repositories/book.repository";

interface FindAllBooksParams {
  page: number;
  limit: number;
  search?: {
  nama?: string;
  categoryIds?: string[];   
  available?: boolean | undefined;  
  tahunTerbitFrom?: number | undefined;
  tahunTerbitTo?: number | undefined;
}

  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

interface BookListResponse {
  books: Book[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface IBookService {
  getAllBooks(params: FindAllBooksParams): Promise<BookListResponse>;
  getBookById(id: string): Promise<Book>;
  createBook(data: {
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    categoryId: string;
    coverUrl?: string;
    tahunTerbit: number;
    penulis: string;
    penerbit: string;
    isbn?: string;
  }): Promise<Book>;
  updateBooks(
    id: string,
    data: {
      nama: string;
      harga: number;
      deskripsi: string;
      stok: number;
      categoryId: string;
      coverUrl?: string;
      tahunTerbit: number;
      penulis: string;
      penerbit: string;
      isbn?: string;
    }
  ): Promise<Book>;
  deleteBook(id: string): Promise<Book>;
  exec(): Promise<any>;
}

export class BookService implements IBookService {
  constructor(private prisma: BookRepo.BookRepository) {}

  getAllBooks = async (
    params: FindAllBooksParams
  ): Promise<BookListResponse> => {
    const { page, limit, search, sortBy, sortOrder } = params;

    const skip = (page - 1) * limit;

    const whereClause: Prisma.BookWhereInput = {
      deletedAt: null,
    };

   if (search?.categoryIds?.length) {
  whereClause.categoryId = {
    in: search.categoryIds
  }
}

if (search?.available === true) {
  whereClause.stok = { gt: 0 }
}


    if (search?.tahunTerbitFrom || search?.tahunTerbitTo) {
      whereClause.tahunTerbit = {};
      if (search.tahunTerbitFrom) {
        whereClause.tahunTerbit.gte = search.tahunTerbitFrom;
      }
      if (search.tahunTerbitTo) {
        whereClause.tahunTerbit.lte = search.tahunTerbitTo;
      }
    }


    const sortCriteria: Prisma.BookOrderByWithRelationInput = sortBy
      ? { [sortBy]: sortOrder ?? "desc" }
      : { createdAt: "desc" };

    const books = await this.prisma.findAll(
      skip,
      limit,
      whereClause,
      sortCriteria
    );
    const total = await this.prisma.countAll(whereClause);

    return {
      books,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  };
  getBookById = async (id: string) => {
    const book = await this.prisma.findById(id);
    if (!book) {
      throw new Error("Buku tidak ditemukan!!");
    }
    return book;
  };

  createBook = async (data: {
    nama: string;
    harga: number;
    deskripsi: string;
    stok: number;
    categoryId: string;
    coverUrl?: string;
    tahunTerbit: number;
    penulis: string;
    penerbit: string;
    isbn?: string;
  }) => {
    return this.prisma.create({
      nama: data.nama,
      harga: Number(data.harga),
      deskripsi: data.deskripsi,
      stok: Number(data.stok),
      coverUrl: data.coverUrl ?? null,
      tahunTerbit: Number(data.tahunTerbit),
      penulis: data.penulis,
      penerbit: data.penerbit,
      isbn: data.isbn || null,
      category: {
        connect: {
          id: data.categoryId,
        },
      },
    });
  };

  updateBooks = async (
    id: string,
    data: {
      nama?: string;
      harga?: number;
      deskripsi?: string;
      stok?: number;
      categoryId?: string;
      coverUrl?: string;
      tahunTerbit?: number;
      penulis?: string;
      penerbit?: string;
      isbn?: string;
    }
  ) => {
    const book = {
      nama: String(data?.nama),
      harga: Number(data?.harga),
      deskripsi: String(data?.deskripsi),
      stok: Number(data?.stok),
      coverUrl: String(data?.coverUrl),
      tahunTerbit: Number(data?.tahunTerbit),
      penulis: String(data?.penulis),
      penerbit: String(data?.penerbit),
      isbn: String(data?.isbn),
    };
    return await this.prisma.update(id, book);
  };

  deleteBook = async (id: string) => {
    return await this.prisma.softDelete(id);
  };

  exec = async () => {
    const stats = await this.prisma.getStats();
    const categoryStats =
      await this.prisma.getBookByCategoryIdAndPublicationYear();

    return {
      overview: stats,
      by: categoryStats,
    };
  };
}
