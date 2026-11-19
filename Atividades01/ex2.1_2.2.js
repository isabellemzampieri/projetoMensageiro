import { mkdir, writeFile } from "node:fs/promises";

async function salvarHistorico() {

    const lista = [
        { id: 1, usuario: "Ana", texto: "Olá!" },
        { id: 2, usuario: "Pedro", texto: "Tudo bem?" }
    ];

    await mkdir(new URL("./data/", import.meta.url), { recursive: true });

    const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);

    await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");

}

salvarHistorico();

import { mkdir, writeFile, readFile } from "node:fs/promises";

async function lerDadosSeguros(nomeArquivo) {

    try {
        const conteudo = await readFile(nomeArquivo, "utf8");

        return JSON.parse(conteudo);

    } catch (erro) {

        if (erro.code === "ENOENT") {
            return [];
        }

        throw erro;
    }
}

const dados = await lerDadosSeguros(
    new URL("./data/arquivo-fantasma.json", import.meta.url)
);

console.log("Resultado com arquivo ausente:", dados);