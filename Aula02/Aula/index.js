//FUNCTION COM PARÂMETRO PRÉ-DEFINIDO

function soma(a, b, op = '+') {
    if (op === '+') {
        return a + b
    }
    if (op === '-') {
        return a - b
    }
}

//FUNÇÕES ANÔNIMAS (SEM NOME)

const somaDois = function (a, b) {
    return a + b
}

somaDois(2, 3)

//FUNÇÕES SEM NOME 2 (ARROW FUNCTION)

const sub = (a, b) => {
    return a - b
}

sub(5, 3)

//ARROW FUNCTION COM 1 SÓ RETORNO

const ehPar = (n) => n % 2 === 0

const quadrado = (n) => n ** 2;

//EXEMPLO DE VAR (FALHOU)

/*const test = () => {
    const idade = 18;
    if(idade >= 18) {
        var ehMaior = true
    }
}

console.log(ehMaior)*/

/**EXPLICAÇÃO: O var (diferente de let e const) consegue vazar os dados para fora do escopo da function */

//ARRAYS

const notas = [10, 6, 5, 4, 10]

console.log(notas)

//ADICIONANDO ITENS AO FINAL DO ARRAY
notas.push(9)

console.log(notas)

//REMOVENDO ITENS DO FINAL DO ARRAY
notas.pop()

//INSERINDO ELEMENTOS NO COMEÇO DO ARRAY
notas.unshift(11)

//REMOVER ELEMENTOS DO COMEÇO DO ARRAY
notas.shift()

//PERCORRENDO O ARRAY COM FOR

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

//PERCORRENDO O ARRAY COM FOREACH

for (let nota of notas) {
    console.log(nota)
}

//FOREACH 2

notas.forEach((nota, idx) => {
    console.log(nota, idx)
})

/**o idx é opcional */

//APLICANDO UMA FUNÇÃO A CADA ELEMENTO DO ARRAY
const novasNotas = notas.map((nota) => {
    return nota / 2
})

console.log(novasNotas)

//CALLBACK

const map = (arr, callback) => {
    const newArr = []
    for (let element of arr) {
        newArr.push(callback(element))
    }
    return newArr
}

console.log(map(notas, (e) => e / 2))
console.log(map(notas, (e) => e * 2))
console.log(map(notas, (e) => e - 2))
console.log(map(notas, (e) => e + 2))

console.log([1, 2, 3, 4, 5].reverse())
console.log([1, 2, 3, 4, 5].includes(5))

//OBJETOS

const aluno = {
    nome: "John",
    sobrenome: "Doo",
    age: 20,
    ce: 0.8,
    notas: [10, 8, 5, 8],
    getFullName: () => aluno.nome + " " + aluno.sobrenome
}

/**Arrow fucntion nao aceita this */

console.log(aluno.nome)
console.log(aluno.getFullName())

//Usando filter

console.log(aluno.notas
    .map(nota => nota * 2)
    .filter(nota => nota > 15)
    .map(nota => nota / 2)
    .reverse())

const objComplexo = {
    nome: "Teste",
    obj: {
        array: [
            {
                teste: {
                    array: [2]
                }
            }
        ]
    }
}

console.log(objComplexo.obj.array[0].teste.array[0])

console.log(null); //valor em branco
console.log(undefined) //ausencia de valor

//Converter para bool
console.log(!!(0))
console.log(!!(null))
console.log(!!(NaN))
console.log(!!(''))

const t = 0

if (t) console.log("Entrei")

//Outro jeito de acessar um obeto
console.log(aluno["nome"])

const getKeyaValue = (obj, key) => obj[key]

console.log(getKeyaValue(aluno, "nome"))