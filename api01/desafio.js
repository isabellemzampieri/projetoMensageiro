// APP da Isabelle Moura Zampieri

import express from 'express';
import { funcionarios } from './funcionarios.js';

const app = express();
const port = 3000;

app.use(express.json());

// GET - Listar todos os funcionários
app.get('/funcionarios', (req, res) => {
    res.status(200).json(funcionarios);
});

// GET - Listar o maior salário
app.get('/funcionarios/maior-salario', (req, res) => {
    const maiorSalario = funcionarios.reduce((maior, atual) => {
        if (atual.salario > maior.salario) {
            return atual;
        } else {
            return maior;
        }
    });

    res.status(200).json(maiorSalario);
});

// GET - Listar por departamento
app.get('/funcionarios/depto/:depto', (req, res) => {
    const depto = req.params.depto.toLowerCase();

    const funcionariosDepto = funcionarios.filter(
        f => f.depto.toLowerCase() === depto
    );

    if (funcionariosDepto.length > 0) {
        res.status(200).json(funcionariosDepto);
    } else {
        res.status(404).json({
            mensagem: `Nenhum funcionário encontrado no departamento ${depto}`
        });
    }
});

// GET - Listar por CPF
app.get('/funcionarios/:cpf', (req, res) => {
    const cpf = req.params.cpf;

    const funcionario = funcionarios.find(f => f.cpf === cpf);

    if (funcionario) {
        res.status(200).json(funcionario);
    } else {
        res.status(404).json({
            mensagem: `Funcionário não encontrado com CPF ${cpf}`
        });
    }
});

// POST - Incluir novo funcionário
app.post('/funcionarios', (req, res) => {
    const { funcionario, cpf, depto, salario } = req.body;

    if (!funcionario || !cpf || !depto || salario === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios'
        });
    }

    const novoFuncionario = {
        funcionario,
        cpf,
        depto,
        salario
    };

    funcionarios.push(novoFuncionario);

    res.status(201).json(novoFuncionario);
});

// PUT - Alterar funcionário
app.put('/funcionarios/:cpf', (req, res) => {
    const cpf = req.params.cpf;

    const { funcionario, depto, salario } = req.body;

    const index = funcionarios.findIndex(f => f.cpf === cpf);

    if (index === -1) {
        return res.status(404).json({
            mensagem: `Funcionário não encontrado com CPF ${cpf}`
        });
    }

    if (!funcionario || !depto || salario === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios'
        });
    }

    funcionarios[index] = {
        cpf,
        funcionario,
        depto,
        salario
    };

    res.status(200).json(funcionarios[index]);
});

// DELETE - Deletar funcionário
app.delete('/funcionarios/:cpf', (req, res) => {
    const cpf = req.params.cpf;

    const index = funcionarios.findIndex(f => f.cpf === cpf);

    if (index === -1) {
        return res.status(404).json({
            mensagem: `Funcionário não encontrado com CPF ${cpf}`
        });
    }

    const [funcionarioRemovido] = funcionarios.splice(index, 1);

    res.status(200).json({
        mensagem: `Funcionário com CPF ${cpf} removido com sucesso`,
        funcionario: funcionarioRemovido
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Acessar http://localhost:${port}/funcionarios`);
});