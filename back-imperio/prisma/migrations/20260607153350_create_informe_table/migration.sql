-- CreateTable
CREATE TABLE "Informe" (
    "id" SERIAL NOT NULL,
    "provincia" TEXT NOT NULL,
    "recaudacionFinal" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Informe_pkey" PRIMARY KEY ("id")
);
