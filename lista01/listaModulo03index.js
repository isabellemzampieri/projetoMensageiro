// app.js - Importa tudo e exibe os resultados
import { precos } from "./listaModulo03precos.js";
import { totalPrecos, filtrarPrecosCaros } from "./listaModulo03operacoesPreco.js";

const maiores = filtrarPrecosCaros(precos, 50);
const total = totalPrecos(precos);

console.log('Valores maiores que 50:', maiores);
console.log('Soma de todos os preços:', total);
