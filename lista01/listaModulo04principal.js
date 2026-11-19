import { clientes } from './clientes.js';
import { capitalizarNomes, buscarCliente } from './processadorNomes.js';

const nomesFormatados = capitalizarNomes(clientes);
console.log('Lista de clientes formatada:', nomesFormatados);

const clienteProcurado = 'ana silva';
const encontrado = buscarCliente(clientes, clienteProcurado);

console.log(`O cliente "${clienteProcurado}" está cadastrado? ${encontrado ? 'Sim' : 'Não'}`);