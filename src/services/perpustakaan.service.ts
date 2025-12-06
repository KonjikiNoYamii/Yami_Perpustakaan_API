import { books, type Book } from "../models/perpustakaan.models";

export const getAllBooks = () => {
  return {
    books,
    total: books.length,
  };
};

export const getBooksById = (id: string) => {
  const numid = parseInt(id);
  const book = books.find((b) => b.id === numid);

  if (!book) {
    throw new Error("Buku tidak ditemukan!");
  }

  return book;
};

export const searchBook = (
  nama?: string,
  min_harga?: string,
  min_stok?: string,
  max_harga?: string,
  max_stok?: string
) => {
  let result = books;

  if (nama) {
    result = result.filter((b) =>
      b.nama.toLowerCase().includes((nama as string).toLowerCase())
    );
  }

  if (min_harga) {
    result = result.filter((b) => b.harga >= Number(min_harga));
  }
  if (max_harga) {
    result = result.filter((b) => b.harga <= Number(max_harga));
  }

  if (min_stok) {
    result = result.filter((b) => b.stok >= Number(min_stok));
  }
  if (max_stok) {
    result = result.filter((b) => b.stok <= Number(max_stok));
  }
  return result
};

export const createBooks = (
  nama: string,
  harga: number,
  deskripsi: string,
  stok: number
) => {
    const newBook:Book ={
        id:books.length + 1,
        nama,
        harga,
        deskripsi,
        stok
    }

    books.push(newBook)
    return newBook
};

export const updateBook = (id:string, data:any)=>{
    const numid = parseInt(id)
    const index = books.findIndex((b) => b.id === numid)

    if (index === -1) {
        throw new Error("Buku tidak ditemukan!")
    }

    books[index] ={
        ...books[index],
        ...data
    }

    return books[index]
}

export const deletedBook = (id:string) =>{
    const numid = parseInt(id)
    const index = books.findIndex((b) => b.id === numid)

    if (index === -1) {
        throw new Error('Buku tidak ditemukan!')
    }

    const deleted = books.splice(index, 1)

    return deleted
}
