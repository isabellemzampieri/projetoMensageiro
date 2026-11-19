// Exercício 3.1 — Migrando para async/await
import express from "express";
const app = express();

app.get("/saudacao-async", async (req, res) => {
  try {
    const mensagem = await saudacaoAssincrona("Aluno do Futuro");
    res.send(mensagem);
  } catch (erro) {
    res.status(500).json({ erro: "Falha na saudação" });
  }
});


// Exercício 3.2 — Forçando e Capturando Erro com try/catch
app.get("/mensagem-erro-async", async (req, res) => {
  try {
    const msg = await obterMensagemPorId(-10);
    res.json(msg);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});


// Inicialização do Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});