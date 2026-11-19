function consutarBancoDeDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mensagensDoBanco = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3']
            resolve(mensagensDoBanco);

        }, 1000)
    })
}

console.log('1. Enviando requisição ao banco...')

consutarBancoDeDados()
.then((mensagensRecebidas) => {
    console.log('2. Dados recebidos com sucesso: ')
    console.log(mensagensRecebidas)
})
.catch((erro) => {
    console.log('Erro ao consutar banco:', erro.message)
})

console.log('3. O node.js continua executando outras tarefas enquanto aguarda...')