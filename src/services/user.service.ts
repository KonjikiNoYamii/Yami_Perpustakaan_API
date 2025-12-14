import type { User } from "../generated/prisma/client";
import { getPrisma } from "../prisma";

const prisma = getPrisma()

export const getAllUsers = async() => {
  const users = await prisma.user.findMany({
    where:{deletedAt:null},
  })
  const total = users.length

  return {
    users, total
  }
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id, deletedAt:null },
  });
};
export const searchUser= async(nama?:string, email?:string ,kota?:string) => {
  return await prisma.user.findMany({
    where:{
      deletedAt:null,
      ...(nama &&{
        nama:{
          contains:nama,
          mode:'insensitive'
        }
      }),
      ...(email &&{
        email:{
          contains:email,
          mode:"insensitive"
        }
      }),
      ...(kota &&{
        kota:{
          contains:kota,
          mode:"insensitive"
        }
      })

    }

  })
};


export const createUser = async(data:{nama:string,email:string,kota:string}):Promise<User> => {
  return await prisma.user.create({
    data:{
      nama:data.nama,
      email:data.email,
      kota:data.kota
    }
  })
}

export const updateUser = async (id: string, data: any) => {
  const existing = await prisma.user.findFirst({
    where: { id, deletedAt: null },
  });

  if (!existing) {
    throw new Error("User tidak ditemukan");
  }

  return prisma.user.update({
    where: { id, deletedAt:null },
    data,
  });
};

export const deleteUser = async (id: string) => {
  const existing = await prisma.user.findFirst({
    where: { id, deletedAt: null },
  });

  if (!existing) {
    throw new Error("User tidak ditemukan atau sudah dihapus");
  }

  return prisma.user.update({
    where: { id, deletedAt:null },
    data: { deletedAt: new Date() },
  });
};
