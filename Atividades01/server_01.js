// Importando o framework Express
import express from 'express';

// Instanciando o Express
const app = express();
const PORT = 3000;

// Criando uma rota
app.get('/', (req, res) => {
    res.send("Servidor rodando com Express");
});

//Rota de status
app.get("/status", (req, res) => {
    res.json({ status: "online", sprint: 1 });
});

//Rota informativa 
app.get("/sobre", (req, res) => {
    res.send("Meu primeiro servidor...");
});

app.get("/aluno", (req, res) => {
    res.json({ nome: "Isabelle", curso: "Técnico em dev. Sistemas", turma: "1A" });
});

app.get("/disciplina", (req, res) => {
    res.send("A disciplina de Programação Back-End capacita o aluno a desenvolver servidores, APIs REST e regras de negócio para sistemas web.");
});

app.get("/ajuda", (req, res) => {
    res.json({ "rotas": [ "/aluno", "/disciplina", "/ajuda", "/mensageiro" ], "acesso": "Navegador/HTTP" });
});

app.get("/mensageiro", (req, res) => {
    res.send("Sistema de mensagens em desenvolvimento... Aguarde a Sprint 02!");
});

//Escuta do servidor

// Definindo a porta do servidor
// Iniciando o servidor Express
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});