// Exercício 2.1 — Sucesso com .then
import express from "express";
const app = express();

app.get("/saudacao-then", (req, res) => {
  saudacaoAssincrona("Seu Nome")
    .then((mensagem) => {
      res.send(mensagem);
    });
});


// Exercício 2.2 — Tratando Falhas com .catch
app.get("/mensagem-invalida-then", (req, res) => {
  obterMensagemPorId(-5)
    .then((msg) => {
      res.json(msg);
    })
    .catch((erro) => {
      res.status(500).json({ erro: erro.message });
    });
});

