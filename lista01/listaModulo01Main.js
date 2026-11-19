// main.js - Arquivo principal que junta os dados com as funções
import { frutas } from './listaModulo01Frutas.js';
import { listarEmMaiusculo, contarItens } from './listaModulo01Formatador.js';

console.log('--- Lista de Frutas Formatada ---');
console.log(listarEmMaiusculo(frutas));

console.log(`\nTotal de frutas no catálogo: ${contarItens(frutas)}`);
