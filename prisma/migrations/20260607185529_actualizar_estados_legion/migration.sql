/*
  Warnings:

  - The values [RESERVA] on the enum `EstadoLegion` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EstadoLegion_new" AS ENUM ('ACTIVA', 'CAMPANA', 'DESCANSO');
ALTER TABLE "public"."Legion" ALTER COLUMN "estado" DROP DEFAULT;
ALTER TABLE "Legion" ALTER COLUMN "estado" TYPE "EstadoLegion_new" USING ("estado"::text::"EstadoLegion_new");
ALTER TYPE "EstadoLegion" RENAME TO "EstadoLegion_old";
ALTER TYPE "EstadoLegion_new" RENAME TO "EstadoLegion";
DROP TYPE "public"."EstadoLegion_old";
ALTER TABLE "Legion" ALTER COLUMN "estado" SET DEFAULT 'ACTIVA';
COMMIT;
