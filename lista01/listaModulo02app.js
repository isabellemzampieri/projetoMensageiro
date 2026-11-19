// app.js - Importa tudo e exibe os resultados
import { idades } from './listaModulo02idades.js';
import { filtrarMaioresDeIdade, somarIdades } from './listaModulo02calculos.js';

const maiores = filtrarMaioresDeIdade(idades);
const total = somarIdades(idades);

console.log('Idades maiores ou iguais a 18:', maiores);
console.log('Soma de todas as idades:', total);

