export function obterProdutoMaisEstocado(lista) {
    return lista.reduce((maior, produto) =>
        produto.quantidade > maior.quantidade ? produto : maior
    );
}

export function obterProdutoMenosEstocado(lista) {
    return lista.reduce((menor, produto) =>
        produto.quantidade < menor.quantidade ? produto : menor
    );
}

export function filtrarPorCategoria(lista, categoriaProcurada) {
    return lista.filter(produto => produto.categoria === categoriaProcurada);
}