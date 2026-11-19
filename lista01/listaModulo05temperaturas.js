export function obterMaiorTemperatura(lista) {
    return lista.reduce((maior, temperatura) => (temperatura > maior? temperatura:maior, lista[0]));
}

export function filtrarDiasQuentes(lista, limite) {
    return lista.filter(temp => temp > limite);
}