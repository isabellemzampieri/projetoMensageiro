import { Router } from 'express';

import {
    getProdutos,
    getProdutosPorCategoria,
    getProdutoPorId,
    postProduto,
    putProduto,
    deleteProduto
} from '../controllers/produtoController.js';

const router = Router();

// Listar todos os produtos
router.get('/', getProdutos);

// Buscar por categoria
router.get('/categoria/:categoria', getProdutosPorCategoria);

// Buscar por ID
router.get('/:id', getProdutoPorId);

// Criar produto
router.post('/', postProduto);

// Atualizar produto
router.put('/:id', putProduto);

// Remover produto
router.delete('/:id', deleteProduto);

export default router;