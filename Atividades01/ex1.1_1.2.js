const historicoMensagens = [
    { id: 1, usuario: "Ana", texto: "Bom dia!" },
    { id: 2, usuario: "Pedro", texto: "Tudo bem?" }
];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);

console.log(conteudoSalvar);

console.log("Tipo da variável:", typeof conteudoSalvar);


const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';

const mensagem = JSON.parse(jsonValido);

console.log(mensagem[0].texto);

const jsonQuebrado = '[{ id: 10, quebrado: sim ';

try {
    JSON.parse(jsonQuebrado);
} catch (erro) {
    console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}