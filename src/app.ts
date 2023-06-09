import express from 'express';
import cors from 'cors';
import horarioRoutes from './routes/horarioRouters';
import clienteRoutes from './routes/clienteRouters';
import salaRoutes from './routes/salaRouters';
import sessaoRoutes from './routes/sessaoRouter';


import * as dotenv from 'dotenv';


dotenv.config(); 

const app = express();

app.use(express.json());

app.use(cors({ 
  origin: [
    `${process.env.LOCAL_ORIGIN}`,
    `${process.env.RENDER_ORIGIN}`
  ], 
  credentials: true 
}));


app.use(salaRoutes);
app.use(horarioRoutes);
app.use(clienteRoutes);
app.use(sessaoRoutes);


app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
