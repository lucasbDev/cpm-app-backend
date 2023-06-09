-- CreateTable
CREATE TABLE "Sala" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "disponivel" BOOLEAN NOT NULL DEFAULT true,
    "horarioId" TEXT
);

-- CreateTable
CREATE TABLE "Horario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL,
    "salaId" TEXT,
    "clienteId" TEXT,
    CONSTRAINT "Horario_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Horario_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Sala_horarioId_key" ON "Sala"("horarioId");
