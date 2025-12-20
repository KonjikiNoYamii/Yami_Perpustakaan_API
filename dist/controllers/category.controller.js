import * as categoryService from "../services/category.service";
import { successResponse } from "../utils/response";
// ===============================
// GET ALL (PUBLIC)
// ===============================
export const getCategories = async (_req, res) => {
    const categories = await categoryService.getAllCategories();
    successResponse(res, "Category berhasil diambil", categories, null, 200);
};
// ===============================
// GET BY ID
// ===============================
export const getCategory = async (req, res) => {
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!");
    }
    const category = await categoryService.getCategoryById(req.params.id);
    successResponse(res, "Detail category", category, null, 200);
};
// ===============================
// CREATE (ADMIN)
// ===============================
export const createCategory = async (req, res) => {
    const { nama } = req.body;
    if (!nama) {
        throw new Error("Nama category wajib diisi");
    }
    const category = await categoryService.createCategory(nama);
    successResponse(res, "Category berhasil dibuat", category, null, 201);
};
// ===============================
// UPDATE (ADMIN)
// ===============================
export const updateCategory = async (req, res) => {
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!");
    }
    const category = await categoryService.updateCategory(req.params.id, req.body.nama);
    successResponse(res, "Category berhasil diupdate", category, null, 200);
};
// ===============================
// DELETE (ADMIN)
// ===============================
export const deleteCategory = async (req, res) => {
    if (!req.params.id) {
        throw new Error("ID tidak ditemukan!");
    }
    const category = await categoryService.deleteCategory(req.params.id);
    successResponse(res, "Category berhasil dihapus", category, null, 200);
};
//# sourceMappingURL=category.controller.js.map