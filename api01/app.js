import express from 'express';
import produtoRoutes from './routes/produtoRoutes.js';

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Direcionar as rotas de produtos
app.use('/produtos', produtoRoutes);

// Inicializar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});