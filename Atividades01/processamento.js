import { usuarios } from './database.js';

const usuariosAtivos = usuarios.filter(u => u.ativo);
console.log(usuariosAtivos); // [{ nome: "Ana"... }]