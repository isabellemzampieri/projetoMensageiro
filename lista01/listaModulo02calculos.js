// calculos.js - Exporta as funções de manipulação do array
export function filtrarMaioresDeIdade(lista) {
  return lista.filter(idade => idade >= 18);
}

export function somarIdades(lista) {
  return lista.reduce((acumulador, idade) => acumulador + idade, 0);
}
