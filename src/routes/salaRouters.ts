import express from 'express';
import {
  listarSalas,
  criarSala,
  atualizarSala,
  deletarSala,
} from '../controllers/SalaController';

const router = express.Router();

router.get('/salas', listarSalas);
router.post('/salas', criarSala);
router.put('/salas/:id', atualizarSala);
router.delete('/salas/:id', deletarSala);

export default router;
