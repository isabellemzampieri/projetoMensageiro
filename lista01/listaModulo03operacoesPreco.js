
export function totalPrecos(lista) {
    return lista.reduce((acumulador, precos) => acumulador + precos, 0);
}

export function filtrarPrecosCaros(lista, limite) {
    return lista.filter(precos => precos >= limite);
}