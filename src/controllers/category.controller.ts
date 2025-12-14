import type { Request, Response } from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  searchCategory,
} from "../services/category.service";
import { successResponse } from "../utils/response";

export const getAll = async (_req: Request, res: Response) => {
  const { categories, total } = await getAllCategories();

  successResponse(
    res,
    "Category berhasil diambil!",
    {
      jumlah: total,
      data: categories,
    },
    null,
    200
  );
};
export const search = async (req: Request, res: Response) => {
  const { nama } = req.query;

  const categories = await searchCategory(nama?.toString());

  successResponse(res, "Kategori ditemukan", categories);
};

export const getById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("ID tidak ditemukan!");
  }

  const category = await getCategoryById(req.params.id);

  successResponse(
    res,
    "Detail category berhasil diambil!",
    category,
    null,
    200
  );
};

// export const search = async (req: Request, res: Response) => {
//   const { name } = req.query;

//   const result = await searchCategory(name?.toString());

//   successResponse(
//     res,
//     "Category ditemukan!",
//     result,
//     null,
//     200
//   );
// };

export const create = async (req: Request, res: Response) => {
  const category = await createCategory(req.body.name);

  successResponse(
    res,
    "Category berhasil dibuat!",
    category,
    null,
    201
  );
};

export const update = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("ID tidak ditemukan!");
  }

  const updated = await updateCategory(req.params.id, req.body.name);

  successResponse(
    res,
    "Category berhasil diupdate!",
    updated,
    null,
    200
  );
};

export const deleted = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("ID tidak ditemukan!");
  }

  const removed = await deleteCategory(req.params.id);

  successResponse(
    res,
    "Category berhasil dihapus!",
    removed,
    null,
    200
  );
};
