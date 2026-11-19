// formatador.js - Arquivo responsável pelas funções utilitárias
export function listarEmMaiusculo(lista) { // cria a função ja exportando pois a função vai funcionar em outro lugar
  return lista.map(item => item.toUpperCase()); //map = segue a lista, toUpperCase = coloca tudo em letra maiuscula
}

export function contarItens(lista) {
  return lista.length; // length = conta a quantidade de itens na lista 
}
