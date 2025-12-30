/*
  Warnings:

  - A unique constraint covering the columns `[isbn]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `penerbit` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `penulis` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahunTerbit` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "isbn" TEXT,
ADD COLUMN     "penerbit" TEXT NOT NULL,
ADD COLUMN     "penulis" TEXT NOT NULL,
ADD COLUMN     "tahunTerbit" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");
