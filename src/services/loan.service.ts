import { getPrisma } from "../prisma";
const prisma = getPrisma();

export const getAllLoans = async () => {
  const loans = await prisma.loan.findMany({
    where: { deletedAt: null },
    include: {
      user: true,
      book: true,
    },
  });
  return { loans, total: loans.length };
};

export const getLoanById = async (id: string) => {
  return prisma.loan.findFirst({
    where: { id, deletedAt: null },
    include: {
      user: true,
      book: true,
    },
  });
};

export const createLoan = async (data: any) => {
  const { userId, bookId, tanggalKembali } = data;

  return prisma.loan.create({
    data: {
      userId,
      bookId,
      tanggalKembali,
    },
  });
};

export const updateLoan = async (id: string, data: any) => {
  return prisma.loan.update({
    where: { id, deletedAt:null },
    data,
  });
};

export const deleteLoan = async (id: string) => {
  return prisma.loan.update({
    where: { id, deletedAt:null},
    data: { deletedAt: new Date() },
  });
};

export const searchLoan = async (
  userId?: string,
  bookId?: string
) => {
  return prisma.loan.findMany({
    where: {
      deletedAt: null,
      ...(userId && { userId }),
      ...(bookId && { bookId }),
    },
    include: {
      user: true,
      book: true,
    },
  });
};
