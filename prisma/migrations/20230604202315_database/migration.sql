-- DropIndex
DROP INDEX "Horario_clienteId_key";

-- AlterTable
ALTER TABLE "Horario" ADD COLUMN     "salaId" TEXT;

-- CreateTable
CREATE TABLE "Sala" (
    "id" TEXT NOT NULL,
    "disponivel" BOOLEAN NOT NULL DEFAULT true,
    "horarioId" TEXT,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sala_horarioId_key" ON "Sala"("horarioId");

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE SET NULL ON UPDATE CASCADE;
