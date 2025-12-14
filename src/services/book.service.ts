import type { Book } from "../generated/prisma/client";
import { getPrisma } from "../prisma";

const prisma = getPrisma();

export const getAllBooks = async () => {
  const books = await prisma.book.findMany({
    where: { deletedAt: null },
    include: { category: true },
  });

  return { books, total: books.length };
};

export const getBookById = async (id: string) => {
  return prisma.book.findUnique({
    where: { id, deletedAt:null },
    include: { category: true },
  });
};

export const searchBook = async (nama?: string) => {
  return prisma.book.findMany({
    where: {
      deletedAt: null,
      ...(nama && {
        nama: { contains: nama, mode: "insensitive" },
      }),
    },
  });
};

export const createBook = async (data: any): Promise<Book> => {
  const { nama, harga, deskripsi, stok, categoryId } = data;

  return prisma.book.create({
    data: { nama, harga, deskripsi, stok, categoryId },
  });
};

export const updateBook = async (id: string, data: any) => {
  return prisma.book.update({
    where: { id , deletedAt:null},
    data,
  });
};

export const deleteBook = async (id: string) => {
  return prisma.book.update({
    where: { id , deletedAt:null},
    data: { deletedAt: new Date() },
  });
};
