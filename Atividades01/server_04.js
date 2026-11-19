import express from "express"
const app = express();

// Função assíncrona com Promise
function consultarMensagens() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mensagensDoBanco = [
                'Boas-vindas ao servidor Express!',
                'Aprendendo Promises com Node.js',
                'Entendendo o fluxo do .then()'
            ];

            // Enviei 'mensagensDoBanco' no resolve
            resolve(mensagensDoBanco);
        }, 1000);
    });
}

// Rota GET /mensagens
app.get('/mensagens', (req, res) => {
    consultarMensagens()
        .then((mensagensRecebidas) => {
            // 'mensagensRecebidas' guardou o array do resolve.
            // O res.json() envia esse array formatado como resposta HTTP (Status 200 OK)
            res.status(200).json(mensagensRecebidas);
        })
        .catch((erro) => {
            // Se ocorrer algum erro/reject, cai no catch (Status 500 Error)
            res.status(500).json({ erro: 'Falha interna no servidor' });
        });
});

// Inicialização do servidor Express
app.listen(3000, () => {
    console.log('Servidor rodando! Acesse: http://localhost:3000/mensagens&#39;');
});