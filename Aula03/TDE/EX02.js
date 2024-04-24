/*2. Escreva uma função chamada somaElementosPares que aceita um array de números como parâmetro e retorna a soma de todos os elementos pares do array.*/



function somaElementosPares(arr) {
    let sum = 0
    arr.forEach((arr) => {

        if (arr % 2 === 0) {
            sum += arr
            
        }
    });
    return sum
}

const elements = [2, 4, 6, 1, 3]

console.log(somaElementosPares(elements))