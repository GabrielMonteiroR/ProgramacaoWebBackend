/*3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array com os elementos resultantes.*/


function maisUm(element) {
    return element + 1
}

const mapearArray = (arr,callback) => {
    const newArr = []
    for(let element of arr) {
        newArr.push(callback(element))
    }
    return newArr
}

elements = [1,2,3,4,5,6,7,8,9,10]

console.log(mapearArray(elements,maisUm))