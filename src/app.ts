import express from 'express';
import cors from 'cors';
import horarioRoutes from './routes/horarioRouters';
import clienteRoutes from './routes/clienteRouters';
import salaRoutes from './routes/salaRouters';

const app = express();
app.use(express.json());
app.use(cors());

app.use(salaRoutes);
app.use(horarioRoutes);
app.use(clienteRoutes);


app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
