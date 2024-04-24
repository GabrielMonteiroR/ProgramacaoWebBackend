/*4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os elementos restantes*/

const filtrarArray = (arr, callback) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

const arrayOriginal = [1, 2, 3, 4, 5];
const novoArray = filtrarArray(arrayOriginal, (elemento) => elemento % 2 === 0);
console.log(novoArray);
