import { Router } from 'express';
import { listarHorarios, criarHorario, atualizarHorario,GetHorarioById, deletarHorario } from '../controllers/HorarioController';

const router = Router();

router.get('/horarios', listarHorarios);
router.get('/horarios/:id', GetHorarioById);
router.post('/horarios', criarHorario);
router.put('/horarios/:id', atualizarHorario);
router.delete('/horarios/:id', deletarHorario);

export default router;
