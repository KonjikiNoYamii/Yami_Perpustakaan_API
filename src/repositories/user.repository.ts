import type { Prisma, PrismaClient } from "../generated/client";

export class UserRepository {
  constructor(private prisma:PrismaClient){}
  
 findByEmail = async(email: string) => {
  return await this.prisma.user.findUnique({
    where: {
      email,
      deletedAt: null,
    },
  });
};
 findById = async(id: string) => {
  return await this.prisma.user.findFirst({
    where: {
      id,
      deletedAt: null,
    },
  });
};

 findAll  = async (
  skip: number,
  take: number,
  where: Prisma.UserWhereInput
) => {
  return await this.prisma.user.findMany({
    skip,
    take,
    where,
    select: {
      id: true,
      nama: true,
      password: true,
      email: true,
      kota: true,
      role: true,
      createdAt: true,
    },
  });
};

 countAll = async(where: Prisma.UserWhereInput) => {
  return await this.prisma.user.count({ where });
};

 create = async (data: Prisma.UserCreateInput) => {
  return await this.prisma.user.create({ data });
};

 softDelete = async (id: string) => {
  return await this.prisma.user.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

}