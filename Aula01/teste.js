console.log("Hello world")

let teste = 10;            //VARIAVEL 
var nome = "Gabriel";      //NÃO UTILIZADO
const ehPar = true;        //CONSTANTE

teste = 12;

console.log(teste);
console.log(nome);
console.log(ehPar);         

teste = "Olá Mundo";

console.log(teste);

console.log(2+2)
console.log(3*2)
console.log(10 / 2)
console.log(8 - 3)
console.log(3^2)
console.log(3 % 2)
console.log(parseInt(5/2))
console.log(0.1 + 0.2)
console.log(Math.PI)

console.log(true && true)
console.log(true && false)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || false)

console.log(1 == 1)
console.log("1" == 1)
console.log(1 + '1')
console.log(1 === '1')
console.log(1 !== '1')
console.log(1 < 2)
console.log(1 <= 1)

let idade = 19;

if(idade >= 18)
{
    console.log("Maior de idade")
}else if(idade === 18)
{
    console.log("Idade é 18")
} else {
    console.log("Menor de idade")
}

const code = 1;

switch(code) {
    case 1:
        console.log("Ligar TV")
        break
    case 2:
        console.log("Desligar TV")
        break
    default:
        console.log("Sei lá")
}


for (let i = 0; i < 10; i++) {
    console.log(i)
}

/* o = 10;
while(1 < o) {
    console.log(i);
    i++;
}*/

function soma(a,b = 1) {
    return a+b;
}


console.log(soma(2,3));
