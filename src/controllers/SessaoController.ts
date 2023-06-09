import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import clienteRepository from '../models/repositories/ClienteRepository';

// Controller para autenticação de login
export async function login(req: Request, res: Response) {
  const { email, senha } = req.body;

  try {
    // Buscar cliente pelo email no banco de dados
    const cliente = await clienteRepository.findByEmail(email);

    // Verificar se o cliente existe e a senha está correta
    if (cliente && await compare(senha, cliente.senha)) {
      // Login bem-sucedido
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      // Credenciais inválidas
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    // Erro ao buscar cliente no banco de dados
    res.status(500).json({ message: 'Erro ao realizar login' });
  }
}