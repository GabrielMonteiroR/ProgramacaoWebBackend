/*6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de geração como parâmetros. A função de geração deve receber um índice e retornar o valor correspondente da lista. A função gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado da função de geração.*/


const gerarLista = (n, funcaoGeracao) => {
    const lista = [];
    for (let index = 0; index < n; index++) {
        lista.push(funcaoGeracao(index));
    }
    return lista;
};


const gerarNumeroMaisUm = (index) => {
    return index + 1;
};

const listaNumeros = gerarLista(5, gerarNumeroMaisUm);
console.log(listaNumeros);

