// Importando o framework Express
import express from 'express';

// Instanciando o Express
const app = express();
const PORT = 3000;

const mensagens = [
{ id: 1, usuario: "Ana", texto: "Bom dia!" },
{ id: 2, usuario: "Pedro", texto: "Olá!" },
{ id: 3, usuario: "Maria", texto: "Tudo bem?" }
];


function listarMensagens() {
return mensagens;
}

function BuscarMensagemPorId(req, res) {
    const id = parseInt(req.params.id);
    const mensagem = mensagens.find(m => m.id === id);
    if (!mensagem) {
        res.status(404).json({erro: "Mensagem não encontrada"});
        return;
    }
    res.json(mensagem);
}
// Criando uma rota
app.get('/', (req, res) => {
    res.send("Servidor rodando com Express");
});

app.get('/mensagens', (req, res) => {
res.json(listarMensagens());
});

app.get("/mensagens/:id", (req, res) => {
    BuscarMensagemPorId(req, res)
});

//Escuta do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});