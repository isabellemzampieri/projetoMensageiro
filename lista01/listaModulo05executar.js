// app.js - Importa tudo e exibe os resultados
import { registroTemperaturas } from "./listaModulo05analiseclima.js";
import { filtrarDiasQuentes, obterMaiorTemperatura } from "./listaModulo05temperaturas.js";

const maiorTemp = obterMaiorTemperatura(registroTemperaturas);
const diasQuentes = filtrarDiasQuentes(registroTemperaturas, limit);

console.log('Maior temperatura:', maiorTemp);
console.log('Dias quentes:', diasQuentes);
