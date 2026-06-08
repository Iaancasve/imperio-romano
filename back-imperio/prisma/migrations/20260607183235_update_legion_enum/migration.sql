/*
  Warnings:

  - The `estado` column on the `Legion` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EstadoLegion" AS ENUM ('ACTIVA', 'CAMPANA', 'RESERVA');

-- AlterTable
ALTER TABLE "Legion" DROP COLUMN "estado",
ADD COLUMN     "estado" "EstadoLegion" NOT NULL DEFAULT 'ACTIVA';
