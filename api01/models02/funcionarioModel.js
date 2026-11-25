import { funcionarios } from '../funcionarios.js';

// Listar todos os funcionários
export function listarFuncionarios() {
    return funcionarios;
}

// Buscar funcionário com maior salário
export function maiorSalario() {
    if (funcionarios.length === 0) {
        return null;
    }

    return funcionarios.reduce((maior, atual) => {
        if (atual.salario > maior.salario) {
            return atual;
        } else {
            return maior;
        }
    });
}

// Buscar funcionários por departamento
export function buscarPorDepto(depto) {
    return funcionarios.filter(
        f => f.depto.toLowerCase() === depto.toLowerCase()
    );
}

// Buscar funcionário por CPF
export function buscarPorCpf(cpf) {
    return funcionarios.find(f => f.cpf === cpf);
}

// Cadastrar funcionário
export function adicionarFuncionario(novoFuncionario) {
    funcionarios.push(novoFuncionario);
    return novoFuncionario;
}

// Alterar funcionário
export function atualizarFuncionario(cpf, dados) {
    const index = funcionarios.findIndex(f => f.cpf === cpf);

    if (index === -1) {
        return null;
    }

    funcionarios[index] = {
        cpf,
        ...dados
    };

    return funcionarios[index];
}

// Excluir funcionário
export function removerFuncionario(cpf) {
    const index = funcionarios.findIndex(f => f.cpf === cpf);

    if (index === -1) {
        return null;
    }

    const [funcionarioRemovido] = funcionarios.splice(index, 1);

    return funcionarioRemovido;
}