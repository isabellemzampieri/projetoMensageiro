// Exercício 1.1 — saudacaoAssincrona com Delay
import express from "express"

function saudacaoAssincrona(nome) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Olá, ${nome}! Bem-vindo ao Mensageiro Local.`);
    }, 2000);
  });
}


// Exercício 1.2 — obterMensagemPorId com Validação e Rejeição
function obterMensagemPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        return reject(new Error("ID inválido: deve ser maior que zero"));
      } else {
        resolve({ id: id, texto: "Mensagem do laboratório" });
      }
    }, 1000);
  });
}


export { saudacaoAssincrona, obterMensagemPorId };

import express from "express";
import { saudacaoAssincrona, obterMensagemPorId } from "./funcoes.js";


const app = express();
app.use(express.json());