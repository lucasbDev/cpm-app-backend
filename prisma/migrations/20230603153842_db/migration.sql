-- CreateTable
CREATE TABLE "Horario" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL,
    "clienteId" TEXT,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Horario_clienteId_key" ON "Horario"("clienteId");

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
