import { Request, Response } from 'express';
import { listar, criar, atualizar, deletar, getHorarioById } from '../models/Horario';

export async function listarHorarios(req: Request, res: Response) {
  const horarios = await listar();

  res.json(horarios);
}

export async function criarHorario(req: Request, res: Response) {
  const { data, disponibilidade, clienteId } = req.body;

  const horario = await criar({
    data: new Date(data), // Converter para o tipo Date
    disponibilidade,
    cliente: {
      connect: { id: clienteId }
    }
  });

  res.json(horario);
}

export async function atualizarHorario(req: Request, res: Response) {
  const { id } = req.params;
  const { data, disponibilidade, clienteId } = req.body;

  const horario = await atualizar(id, {
    data: new Date(data), // Converter para o tipo Date
    disponibilidade,
    cliente: {
      connect: { id: clienteId }
    }
  });

  if (!horario) {
    return res.status(404).json({ error: 'Horário não encontrado' });
  }

  res.json(horario);
}

export async function deletarHorario(req: Request, res: Response) {
  const { id } = req.params;

  await deletar(id);

  res.sendStatus(204);
}

export async function GetHorarioById(req: Request, res: Response) {
  const { id } = req.params;

  const horario = await getHorarioById(id);

  if (!horario) {
    return res.status(404).json({ error: 'Horário não encontrado' });
  }

  res.json(horario);
}

