import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import clienteRepository from '../models/repositories/ClienteRepository';

export async function login(req: Request, res: Response) {
  const { email, senha } = req.body;

  try {
  
    const cliente = await clienteRepository.findByEmail(email);

    if (cliente && await compare(senha, cliente.senha)) {
      res.status(200).json( cliente.id ); 
    } else {

      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {

    res.status(500).json({ message: 'Erro ao realizar login' });
  }
}
