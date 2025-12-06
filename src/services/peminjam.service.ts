import { users, type BukuDipinjam, type User } from "../models/peminjam.models";

export const getAllUsers = () => {
  return {
    users,
    total: users.length,
  };
};

export const getUserById = (id: string) => {
  const numid = parseInt(id);
  const user = users.find((u) => u.id === numid);

  if (!user) {
    throw new Error("User tidak ditemukan!!");
  }
  return user;
};
export const searchUser = (
  nama?: string,
  email?: string,
  kota?: string,
  bukuDipinjamId?: number,
  bukuDipinjamNama?: string
) => {
  let result = users;

  // Filter nama user
  if (nama) {
    result = result.filter((u) =>
      u.nama.toLowerCase().includes(nama.toLowerCase())
    );
  }

  // Filter email user
  if (email) {
    result = result.filter((u) =>
      u.email.toLowerCase().includes(email.toLowerCase())
    );
  }

  // Filter kota
  if (kota) {
    result = result.filter((u) =>
      u.kota.toLowerCase().includes(kota.toLowerCase())
    );
  }

  // Filter berdasarkan id buku
  if (bukuDipinjamId !== undefined) {
    result = result.filter((u) => u.bukuDipinjam.id === bukuDipinjamId);
  }

  // Filter berdasarkan nama buku
  if (bukuDipinjamNama) {
    result = result.filter((u) =>
      u.bukuDipinjam.nama.toLowerCase().includes(
        bukuDipinjamNama.toLowerCase()
      )
    );
  }

  return result;
};


export const createUser = (
  nama: string,
  email: string,
  kota: string,
  bukuDipinjam: BukuDipinjam
) => {
  const newUser: User = {
    id: users.length + 1,
    nama,
    email,
    kota,
    bukuDipinjam,
  };
  users.push(newUser);

  return newUser;
};

export const updateUser = (id: string, data: any) => {
  const numid = parseInt(id);
  const index = users.findIndex((u) => u.id === numid);

  if (index === -1) {
    throw new Error("User tidak ditemukan!");
  }

  const target = users[index]!; // <- ini penting agar tidak undefined

  users[index] = {
    ...target,
    ...data,
    bukuDipinjam: {
      ...target.bukuDipinjam,
      ...(data.bukuDipinjam || {}),
    },
  };

  return users[index];0
};



export const deletedUser = (id: string) => {
  const numid = parseInt(id);
  const index = users.findIndex((u) => u.id === numid);

  if (index === -1) {
    throw new Error("User tidak ditemukan");
  }

  const deleted = users.splice(index, 1);

  return deleted;
};
