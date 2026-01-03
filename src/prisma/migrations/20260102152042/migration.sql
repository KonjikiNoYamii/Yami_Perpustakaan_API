/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Loan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoanItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_userId_fkey";

-- DropForeignKey
ALTER TABLE "LoanItem" DROP CONSTRAINT "LoanItem_bookId_fkey";

-- DropForeignKey
ALTER TABLE "LoanItem" DROP CONSTRAINT "LoanItem_loanId_fkey";

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Loan";

-- DropTable
DROP TABLE "LoanItem";

-- DropTable
DROP TABLE "User";
