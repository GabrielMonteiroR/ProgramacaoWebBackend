/*5. Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. A função deve usar a função de validação para verificar se os dados no objeto atendem à condição especificada e retornar true se sim, ou false caso contrário. (Ex. nome possui mais de 3 caracteres, senha existe, etc)*/

const validarDados = (objeto, validacao) => {
    return validacao(objeto);
};

const aluno = {
    nome: "John",
    sobrenome: "Doo",
    age: 20,
};

const validacaoNome = (objeto) => {
    return objeto.nome.length > 10;
};

const nomeValido = validarDados(aluno, validacaoNome);
console.log(nomeValido); 
