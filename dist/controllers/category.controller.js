import { successResponse } from "../utils/response";
export class CategoryController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // ===============================
    // GET ALL (PUBLIC)
    // ===============================
    getCategories = async (_req, res) => {
        const categories = await this.prisma.getAllCategories();
        successResponse(res, "Category berhasil diambil", categories, null, 200);
    };
    // ===============================
    // GET BY ID
    // ===============================
    getCategory = async (req, res) => {
        if (!req.params.id) {
            throw new Error("ID tidak ditemukan!");
        }
        const category = await this.prisma.getCategoryById(req.params.id);
        successResponse(res, "Detail category", category, null, 200);
    };
    // ===============================
    // CREATE (ADMIN)
    // ===============================
    createCategory = async (req, res) => {
        const { nama } = req.body;
        if (!nama) {
            throw new Error("Nama category wajib diisi");
        }
        const category = await this.prisma.createCategory(nama);
        successResponse(res, "Category berhasil dibuat", category, null, 201);
    };
    // ===============================
    // UPDATE (ADMIN)
    // ===============================
    updateCategory = async (req, res) => {
        if (!req.params.id) {
            throw new Error("ID tidak ditemukan!");
        }
        const category = await this.prisma.updateCategory(req.params.id, req.body);
        successResponse(res, "Category berhasil diupdate", category, null, 200);
    };
    // ===============================
    // DELETE (ADMIN)
    // ===============================
    deleteCategory = async (req, res) => {
        if (!req.params.id) {
            throw new Error("ID tidak ditemukan!");
        }
        const category = await this.prisma.deleteCategory(req.params.id);
        successResponse(res, "Category berhasil dihapus", category, null, 200);
    };
}
//# sourceMappingURL=category.controller.js.map