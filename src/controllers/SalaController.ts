import { Request, Response } from 'express';
import { listar, criar, atualizar, deletar } from '../models/Sala';

export async function listarSalas(req: Request, res: Response) {
  const salas = await listar();
  res.json(salas);
}

export async function criarSala(req: Request, res: Response) {
  const { disponivel, horarioId } = req.body;

  const sala = await criar({
    disponivel,
    Horario: {
      connect: {id: horarioId}
    }
  });

  res.json(sala);
}

export async function atualizarSala(req: Request, res: Response) {
  const { id } = req.params;
  const { disponivel } = req.body;

  const sala = await atualizar(id, {
    disponivel,
  });

  if (!sala) {
    return res.status(404).json({ error: 'Sala não encontrada' });
  }

  res.json(sala);
}

export async function deletarSala(req: Request, res: Response) {
  const { id } = req.params;

  await deletar(id);

  res.sendStatus(204);
}
