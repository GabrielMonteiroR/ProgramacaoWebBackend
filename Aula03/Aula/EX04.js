const validarDados = (objeto,validarObj) => {
    const ehValido = validarObj(obj)
    if(ehValido) return true
    return false
}


const pessoa = {
    nome: "Gabriel"
}

const nomeValido = (pessoa) => {
    return pessoa.nome.length > 3
}

const result = validarDados(pessoa, validarNome)
console.log(result)