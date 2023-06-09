import express from 'express';
import { login }from '../controllers/SessaoController';

const router = express.Router();
// Rota para autenticação de login
router.post('/login', login);

export default router;