-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "contrasena" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rol" (
    "id" SERIAL NOT NULL,
    "descripcion" VARCHAR(20) NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolAsignado" (
    "idra" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "rolId" INTEGER NOT NULL,

    CONSTRAINT "RolAsignado_pkey" PRIMARY KEY ("idra")
);

-- CreateTable
CREATE TABLE "Provincia" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "lealtad" INTEGER NOT NULL,
    "prosperidadEconomica" INTEGER NOT NULL,
    "impuestos" INTEGER NOT NULL,
    "conflictosInternos" INTEGER NOT NULL,
    "riesgoRebelion" INTEGER NOT NULL,

    CONSTRAINT "Provincia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Legion" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "numeroSoldados" INTEGER NOT NULL,
    "experiencia" INTEGER NOT NULL,
    "moral" INTEGER NOT NULL,
    "estado" VARCHAR(20) NOT NULL,
    "provinciaId" INTEGER,

    CONSTRAINT "Legion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gobernador" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "edad" INTEGER NOT NULL,
    "nivelCompetencia" INTEGER NOT NULL,
    "nivelCorrupcion" INTEGER NOT NULL,
    "tiempoCargo" INTEGER NOT NULL,
    "provinciaId" INTEGER,

    CONSTRAINT "Gobernador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rol_descripcion_key" ON "Rol"("descripcion");

-- CreateIndex
CREATE UNIQUE INDEX "RolAsignado_usuarioId_rolId_key" ON "RolAsignado"("usuarioId", "rolId");

-- CreateIndex
CREATE UNIQUE INDEX "Provincia_nombre_key" ON "Provincia"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Legion_nombre_key" ON "Legion"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Gobernador_provinciaId_key" ON "Gobernador"("provinciaId");

-- AddForeignKey
ALTER TABLE "RolAsignado" ADD CONSTRAINT "RolAsignado_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolAsignado" ADD CONSTRAINT "RolAsignado_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Legion" ADD CONSTRAINT "Legion_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "Provincia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gobernador" ADD CONSTRAINT "Gobernador_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "Provincia"("id") ON DELETE SET NULL ON UPDATE CASCADE;
