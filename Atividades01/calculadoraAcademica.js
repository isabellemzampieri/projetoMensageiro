import {alunos} from './Dadosalunos.js';

export function calcularMedia(nome) {

    const aluno = alunos.find(aluno => aluno.nome === nome);
    if (!aluno) {
        console.log('Aluno não encontrado');
    }

    return (aluno.nota1 + aluno.nota2) / 2;}

    export function verificarSituacao(nome) {
    const media = calcularMedia(nome);
    return media >= 7 ? 'Aprovado' : 'Reprovado';
}