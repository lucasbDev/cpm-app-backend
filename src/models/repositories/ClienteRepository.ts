import { PrismaClient, Cliente } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  // Método para encontrar um cliente pelo email
  findByEmail: async function(email: string): Promise<Cliente | null> {
    try {
      // Utilize o método findFirst do Prisma para buscar um cliente pelo email
      const cliente = await prisma.cliente.findFirst({ where: { email } });
      return cliente;
    } catch (error) {
      throw new Error('Erro ao buscar cliente pelo email');
    }
  },
};