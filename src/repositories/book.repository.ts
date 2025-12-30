import type { Book, Prisma, PrismaClient } from "../../dist/generated/client";

export class BookRepository {
  constructor(private prisma: PrismaClient) {}

  findAll = async (
    skip: number,
    take: number,
    where: Prisma.BookWhereInput,
    orderBy: Prisma.BookOrderByWithRelationInput
  ): Promise<Book[]> => {
    return this.prisma.book.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        category: true,
      },
    });
  };
  countAll = async (where: Prisma.BookWhereInput) => {
    return this.prisma.book.count({
      where,
    });
  };

  findById = async (id: string) => {
    return this.prisma.book.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        category: true,
      },
    });
  };

  create = async (data: Prisma.BookCreateInput) => {
    return this.prisma.book.create({
      data,
      include: {
        category: true,
      },
    });
  };

  update = async (id: string, data: Prisma.BookUpdateInput) => {
    return this.prisma.book.update({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        category: true,
      },
      data,
    });
  };

  softDelete = async (id: string) => {
    return this.prisma.book.update({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        category: true,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  };

  getStats = async () => {
    return await this.prisma.book.aggregate({
      _count: { id: true },
      _avg: { harga: true },
      _sum: { stok: true },
      _min: { harga: true },
      _max: { harga: true },
    });
  };

  getBookByCategoryIdAndPublicationYear = async () => {
    return await this.prisma.book.groupBy({
      by: ["categoryId", "tahunTerbit"],
      _count: { id: true },
      _avg: { harga: true },
      _sum: { stok: true },
      orderBy: [{ categoryId: "asc" }, { tahunTerbit: "asc" }],
    });
  };
}
