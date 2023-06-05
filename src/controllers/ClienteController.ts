import { Request, Response } from 'express';
import { listarClientes, criar, atualizar, deletar, getClienteById } from '../models/Cliente';

export async function listar(req: Request, res: Response) {
  const clientes = await listarClientes();

  res.json(clientes);
}

export async function criarCliente(req: Request, res: Response) {
  const { nome, email, senha } = req.body;

  const cliente = await criar({
    nome,
    email,
    senha
  });

  res.json(cliente);
}

export async function atualizarCliente(req: Request, res: Response) {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  const cliente = await atualizar(id, {
    nome,
    email,
    senha
  });

  if (!cliente) {
    return res.status(404).json({ error: 'Cliente não encontrado' });
  }

  res.json(cliente);
}

export async function deletarCliente(req: Request, res: Response) {
  const { id } = req.params;

  await deletar(id);

  res.sendStatus(204);
}

export async function GetClienteById(req: Request, res: Response) {
  const { id } = req.params;

  const cliente = await getClienteById(id);

  if (!cliente) {
    return res.status(404).json({ error: 'Cliente não encontrado' });
  }

  res.json(cliente);
}
