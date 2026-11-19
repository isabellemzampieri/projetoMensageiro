import { produtos } from "./desafio_produtos.js";
import { obterProdutoMaisEstocado, obterProdutoMenosEstocado, filtrarPorCategoria } from "./desefio_estoque.js";

const maior = obterProdutoMaisEstocado(produtos);
const menor = obterProdutoMenosEstocado(produtos);
const eletronicos = filtrarPorCategoria(produtos, 'Eletrônicos');

console.log('Produto com maior estoque:', maior);
console.log('Produto com menor estoque:', menor);
console.log('Produtos da categoria Eletrônicos:', eletronicos);