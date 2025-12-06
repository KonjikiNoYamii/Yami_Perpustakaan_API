import type { Request, Response } from "express";
import {
  createBooks,
  deletedBook,
  getAllBooks,
  getBooksById,
  searchBook,
  updateBook,
} from "../services/perpustakaan.service";
import { successResponse } from "../utils/response";

export const getAll = (_req: Request, res: Response) => {
  const { books, total } = getAllBooks();

  successResponse(res, "Buku berhasil diambil!!", {
    jumlah: total,
    data: books,
  });
};
export const search = (req: Request, res: Response) => {
  const { nama, min_harga, min_stok, max_harga, max_stok } = req.query;

const result = searchBook(
    nama?.toString(),
    min_harga?.toString(),
    min_stok?.toString(),
    max_harga?.toString(),
    max_stok?.toString()
);

  successResponse(res, "Buku berhasil ditemukan!", result, null, 200);
};

export const getByid = (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("ID tidak ditemukan!");
  }

  const character = getBooksById(req.params.id);

  successResponse(res, "Buku berhasil diambil!", character, null, 200);
};

export const create = (req: Request, res: Response) => {
  const { nama, harga, stok, deskripsi } = req.body;

  const newBook = createBooks(nama, Number(harga), stok, deskripsi);

  successResponse(res, "Buku berhasil dibuat!", newBook, null, 201);
};

export const update = (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("id tidak ditemukan!");
  }

  const book = updateBook(req.params.id, req.body);

  successResponse(res, "Buku berhasil di update!", book, null, 201);
};

export const deleted = (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("ID tidak ditemukan!");
  }

  const deleted = deletedBook(req.params.id);

  successResponse(res, "Buku berhasil dihapus!", deleted, null, 200);
};
