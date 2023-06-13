import { PrismaClient, Cliente } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  
  findByEmail: async function(email: string): Promise<Cliente | null> {
    try {
      const cliente = await prisma.cliente.findFirst({ where: { email } });
      return cliente;
    } catch (error) {
      throw new Error('Erro ao buscar cliente pelo email');
    }
  },
};
