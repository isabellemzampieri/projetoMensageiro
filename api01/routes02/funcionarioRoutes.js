import express from 'express';

import {
    listar,
    listarMaiorSalario,
    listarPorDepto,
    listarPorCpf,
    cadastrar,
    alterar,
    excluir
} from '../controllers02/funcionarioController.js';

const router = express.Router();

// GET - Listar todos
router.get('/', listar);

// GET - Listar maior salário
router.get('/maior-salario', listarMaiorSalario);

// GET - Listar por departamento
router.get('/depto/:depto', listarPorDepto);

// GET - Listar por CPF
router.get('/:cpf', listarPorCpf);

// POST - Cadastrar funcionário
router.post('/', cadastrar);

// PUT - Alterar funcionário
router.put('/:cpf', alterar);

// DELETE - Excluir funcionário
router.delete('/:cpf', excluir);

export default router;