import {calculadoraAcademica} from './calculadoraAcademica.js';
import {verificarSituacao} from './calculadoraAcademica.js';

console.log('A media do Davi é: ' + calculadoraAcademica.calcularMedia('Davi'));
console.log('A media do João é: ' + calculadoraAcademica.calcularMedia('João'));
console.log('A media do Davizinhu é: ' + calculadoraAcademica.calcularMedia('Davizinhu'));

console.log('A situação do Davi é: ' + verificarSituacao('Davi'));
console.log('A situação do João é: ' + verificarSituacao('João'));
console.log('A situação do Davizinhu é: ' + verificarSituacao ('Davizinhu'));