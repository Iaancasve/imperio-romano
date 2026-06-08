-- CreateTable
CREATE TABLE "Rebelion" (
    "id" SERIAL NOT NULL,
    "provincia" TEXT NOT NULL,
    "nivelRiesgo" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gobernador" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Rebelion_pkey" PRIMARY KEY ("id")
);
