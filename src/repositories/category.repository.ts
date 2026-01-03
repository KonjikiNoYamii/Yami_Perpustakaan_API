import { Prisma, PrismaClient } from "../../dist/generated";

export interface ICategoryRepository {}

export class CategoryRepository implements ICategoryRepository {
  constructor(private prisma: PrismaClient) {}

  findAll = (where?: Prisma.CategoryWhereInput) => {
    return this.prisma.category.findMany({
      where: {
        deletedAt: null,
        ...where,
      },
      orderBy: {
        nama: "asc",
      },
    });
  };

  findById = (id: string) => {
    return this.prisma.category.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    });
  };

  findByName = (nama: string) => {
    return this.prisma.category.findFirst({
      where: {
        nama,
        deletedAt: null,
      },
    });
  };

  create = (data: Prisma.CategoryCreateInput) => {
    return this.prisma.category.create({
      data,
    });
  };

  update = (id: string, data: Prisma.CategoryUpdateInput) => {
    return this.prisma.category.update({
      where: {
        id,
        deletedAt: null,
      },
      data,
    });
  };

  softDelete = (id: string) => {
    return this.prisma.category.update({
      where: {
        id,
        deletedAt: null,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  };
}
