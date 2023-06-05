import { Router } from 'express';
import { listar, criarCliente, atualizarCliente, deletarCliente, GetClienteById } from '../controllers/ClienteController';

const router = Router();

router.get('/clientes', listar);
router.get('/clientes/:id', GetClienteById);
router.post('/clientes', criarCliente);
router.put('/clientes/:id', atualizarCliente);
router.delete('/clientes/:id', deletarCliente);

export default router;
