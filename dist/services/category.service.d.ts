export declare const getAllCategories: () => Promise<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}[]>;
export declare const getCategoryById: (id: string) => Promise<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
export declare const createCategory: (nama: string) => Promise<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
export declare const updateCategory: (id: string, nama: string) => Promise<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
export declare const deleteCategory: (id: string) => Promise<{
    id: string;
    nama: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}>;
//# sourceMappingURL=category.service.d.ts.map