import { getPrisma } from "../prisma";
const prisma = getPrisma();

export const getAllCategories = async () => {
  const categories = await prisma.category.findMany({
    where: { deletedAt: null },
  });
  return { categories, total: categories.length };
};

export const getCategoryById = async (id: string) => {
  return prisma.category.findUnique({ where: { id, deletedAt:null } });
};

export const createCategory = async (nama: string) => {
  return prisma.category.create({
    data: { nama },
  });
};

export const updateCategory = async (id: string, nama: string) => {
  return prisma.category.update({
    where: { id, deletedAt:null },
    data: { nama },
  });
};

export const deleteCategory = async (id: string) => {
  return prisma.category.update({
    where: { id, deletedAt:null },
    data: { deletedAt: new Date() },
  });
};

export const searchCategory = async (nama?: string) => {
  return prisma.category.findMany({
    where: {
      deletedAt: null,
      ...(nama && {
        nama: {
          contains: nama,
          mode: "insensitive",
        },
      }),
    },
  });
};

