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
