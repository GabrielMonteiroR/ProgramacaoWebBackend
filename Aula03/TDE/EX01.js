/*1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro e retorna o maior elemento do array.*/

function encontrarMaiorElemento(arr) {
    return Math.min(...arr)
}

const itens = [4, 7, 8, 2, 23, 98, 3, 4, 2, 5, 6, 7]

console.log(encontrarMaiorElemento(itens))