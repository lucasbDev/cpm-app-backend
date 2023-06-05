import { Prisma, PrismaClient, Horario } from '@prisma/client';

const prisma = new PrismaClient();

export async function listar(): Promise<Horario[]> {
  const horarios = await prisma.horario.findMany();
  return horarios;
}

export async function criar(data: Prisma.HorarioCreateInput): Promise<Horario> {
  const horario = await prisma.horario.create({ data });
  return horario;
}

export async function atualizar(
  id: string,
  data: Prisma.HorarioUpdateInput
): Promise<Horario | null> {
  const horario = await prisma.horario.update({ where: { id }, data });
  return horario;
}

export async function deletar(id: string): Promise<void> {
  await prisma.horario.delete({ where: { id } });
}

export async function getHorarioById(id: string): Promise<Horario | null> {
  const horario = await prisma.horario.findUnique({
    where: { id },
  });

  return horario;
}