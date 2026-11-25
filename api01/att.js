import express from "express";
import { produtos } from "./produtos_mono.js";

const app = express();
const port = 3000;

app.use(express.json());


app.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});


app.get("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).json({ message: `Produto com ID ${id} não encontrado` });
    }
});


app.get("/produtos/categoria/:cat", (req, res) => {
    const categoria = req.params.cat;
    const produtosCategoria = produtos.filter(
        p => p.categoria.toLowerCase() === categoria.toLowerCase()
    );

    if (produtosCategoria.length > 0) {
        res.status(200).json(produtosCategoria);
    } else {
        res.status(404).json({ message: `Nenhum produto encontrado para a categoria '${categoria}'` });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});