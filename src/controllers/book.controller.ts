import type { Request, Response } from "express";
import * as service from "../services/book.service";
import { successResponse } from "../utils/response";

export const getAll = async (_: Request, res: Response) => {
  const data = await service.getAllBooks();
  successResponse(res, "Buku berhasil diambil", data);
};

export const getById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Paramater tidak ditemukan!")
  }
  const book = await service.getBookById(req.params.id);
  successResponse(res, "Detail buku", book);
};

export const search = async (req: Request, res: Response) => {
  const books = await service.searchBook(req.query.nama?.toString());
  successResponse(res, "Hasil pencarian", books);
};

export const create = async (req: Request, res: Response) => {
  const book = await service.createBook(req.body);
  successResponse(res, "Buku dibuat", book, null, 201);
};

export const update = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Paramater tidak ditemukan!")
  }
  const book = await service.updateBook(req.params.id, req.body);
  successResponse(res, "Buku diupdate", book);
};

export const deleted = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Paramater tidak ditemukan!")
  }
  const book = await service.deleteBook(req.params.id);
  successResponse(res, "Buku dihapus", book);
};
