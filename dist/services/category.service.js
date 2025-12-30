export class CategoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAllCategories = async () => {
        return this.prisma.findAll();
    };
    getCategoryById = async (id) => {
        const category = await this.prisma.findById(id);
        if (!category) {
            throw new Error("Category tidak ditemukan");
        }
        return category;
    };
    createCategory = async (nama) => {
        const existing = await this.prisma.findByName(nama);
        if (existing) {
            throw new Error("Category sudah ada");
        }
        return this.prisma.create({ nama });
    };
    updateCategory = async (id, nama) => {
        return this.prisma.update(id, nama);
    };
    deleteCategory = async (id) => {
        return this.prisma.softDelete(id);
    };
}
//# sourceMappingURL=category.service.js.map