// APP da Isabelle Moura Zampieri

import express from 'express';
import funcionarioRoutes from './routes02/funcionarioRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

// Rotas dos funcionários
app.use('/funcionarios', funcionarioRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Acessar http://localhost:${port}/funcionarios`);
});