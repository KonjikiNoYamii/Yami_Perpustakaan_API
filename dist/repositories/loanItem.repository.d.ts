import { PrismaClient } from "@prisma/client.js";
export declare class loanItemRepository {
  private prisma;
  constructor(prisma: PrismaClient);
  findByLoanId: (
    loanId: string
  ) => import("../../dist/generated/index.js").Prisma.PrismaPromise<
    ({
      book: {
        category: {
          id: string;
          nama: string;
          createdAt: Date;
          updatedAt: Date;
          deletedAt: Date | null;
        };
      } & {
        id: string;
        nama: string;
        deskripsi: string;
        harga: number;
        stok: number;
        coverUrl: string | null;
        tahunTerbit: number;
        penulis: string;
        penerbit: string;
        isbn: string | null;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
      };
    } & {
      id: string;
      loanId: string;
      bookId: string;
      qty: number;
    })[]
  >;
  findById: (
    id: string
  ) => import("../../dist/generated/index.js").Prisma.Prisma__LoanItemClient<
    | ({
        book: {
          category: {
            id: string;
            nama: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
          };
        } & {
          id: string;
          nama: string;
          deskripsi: string;
          harga: number;
          stok: number;
          coverUrl: string | null;
          tahunTerbit: number;
          penulis: string;
          penerbit: string;
          isbn: string | null;
          categoryId: string;
          createdAt: Date;
          updatedAt: Date;
          deletedAt: Date | null;
        };
        loan: {
          user: {
            id: string;
            nama: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            email: string;
            password: string;
            kota: string;
            role: string;
          };
        } & {
          id: string;
          createdAt: Date;
          updatedAt: Date;
          deletedAt: Date | null;
          userId: string;
          status: string;
          tanggalPinjam: Date;
          tanggalKembali: Date | null;
        };
      } & {
        id: string;
        loanId: string;
        bookId: string;
        qty: number;
      })
    | null,
    null,
    import("../../dist/generated/runtime/client.js").DefaultArgs,
    import("../../dist/generated/index.js").Prisma.PrismaClientOptions
  >;
}
//# sourceMappingURL=loanItem.repository.d.ts.map
