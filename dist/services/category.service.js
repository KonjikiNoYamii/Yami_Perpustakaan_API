import * as categoryRepo from "../repositories/category.repository";
export const getAllCategories = async () => {
    return categoryRepo.findAll();
};
export const getCategoryById = async (id) => {
    const category = await categoryRepo.findById(id);
    if (!category) {
        throw new Error("Category tidak ditemukan");
    }
    return category;
};
export const createCategory = async (nama) => {
    const existing = await categoryRepo.findByName(nama);
    if (existing) {
        throw new Error("Category sudah ada");
    }
    return categoryRepo.create({ nama });
};
export const updateCategory = async (id, nama) => {
    return categoryRepo.update(id, { nama });
};
export const deleteCategory = async (id) => {
    return categoryRepo.softDelete(id);
};
//# sourceMappingURL=category.service.js.map