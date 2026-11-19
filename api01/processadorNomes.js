/**
 * Transforma uma lista de nomes completos (em minúsculas) em nomes capitalizados.
 * Exemplo: "ana silva" -> "Ana Silva"
 */
export function capitalizarNomes(lista) {
  // 1. Usamos o .map() para percorrer cada nome completo da lista e retornar um novo array formatado
  return lista.map(nome => {
    return nome
      // 2. O .split(' ') divide o nome completo em um array de palavras individuais usando o espaço como separador.
      // Exemplo: "ana silva" vira ["ana", "silva"]
      .split(' ')
      
      // 3. Usamos o .map() interno para formatar cada palavra individualmente (nome e sobrenome)
      .map(palavra => {
        // palavra.charAt(0).toUpperCase(): pega a primeira letra da palavra e transforma em maiúscula ("a" -> "A")
        // palavra.slice(1): pega o restante da palavra a partir do segundo caractere (índice 1) ("na")
        // A junção com '+' resulta na palavra capitalizada ("Ana")
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
      })
      
      // 4. O .join(' ') junta as palavras formatadas de volta em uma única string, separadas por espaço.
      // Exemplo: ["Ana", "Silva"] vira "Ana Silva"
      .join(' ');
  });
}

/**
 * Verifica se um determinado cliente está na lista de cadastrados.
 * Faz a comparação sem diferenciar maiúsculas de minúsculas.
 */
export function buscarCliente(lista, nomeProcurado) {
  // O .some() verifica se ao menos um item da lista atende à condição (retorna true ou false)
  return lista.some(nome => nome.toLowerCase() === nomeProcurado.toLowerCase());
}