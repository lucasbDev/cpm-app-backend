import { Prisma, PrismaClient, Cliente } from '@prisma/client';

const prisma = new PrismaClient();

export async function listarClientes(): Promise<Cliente[]>{
  const cliente = await prisma.cliente.findMany({
    include: {
      horarios: true,
    },
  });
  return cliente
}

export async function criar(data: Prisma.ClienteCreateInput): Promise<Cliente> {
  const cliente = await prisma.cliente.create({ data });
  return cliente;
}

export async function atualizar(
  id: string,
  data: Prisma.ClienteUpdateInput
): Promise<Cliente | null> {
  const cliente = await prisma.cliente.update({ where: { id }, data });
  return cliente;
}

export async function deletar(id: string): Promise<void> {
  await prisma.cliente.delete({ where: { id } });
}

export async function getClienteById(id: string): Promise<Cliente | null> {
  const cliente = await prisma.cliente.findUnique({
    where: { id },
  });

  return cliente;
}