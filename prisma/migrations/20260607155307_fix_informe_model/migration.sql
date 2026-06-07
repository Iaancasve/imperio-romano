/*
  Warnings:

  - Added the required column `gobernador` to the `Informe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Informe" ADD COLUMN     "gobernador" TEXT NOT NULL;
