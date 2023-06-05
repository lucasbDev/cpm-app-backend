import { Prisma, PrismaClient, Sala } from '@prisma/client';

const prisma = new PrismaClient();

export async function listar(): Promise<Sala[]> {
  const salas = await prisma.sala.findMany();
  return salas;
}

export async function criar(data: Prisma.SalaCreateInput): Promise<Sala> {
  const sala = await prisma.sala.create({ data });
  return sala;
}

export async function atualizar(
  id: string,
  data: Prisma.SalaUpdateInput
): Promise<Sala | null> {
  const sala = await prisma.sala.update({ where: { id }, data });
  return sala;
}

export async function deletar(id: string): Promise<void> {
  await prisma.sala.delete({ where: { id } });
}
