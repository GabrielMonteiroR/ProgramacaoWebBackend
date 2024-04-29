function soma(a, b) {
    return new Promise((resolve, reject) => {
        const resultado = a + b;
        if (resultado % 2 === 0) {
            resolve("SUCESS: " + resultado);
        } else {
            reject("ERROR: " + resultado);
        }
    });
}

soma(2, 1)
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error(erro);
    });

