const express = require("express")
const server = express()
//http://localhost:5000

const port = 5000
server.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`)
})


server.get("/health", (req, res) => {
    res.json({
        status: "running"
    })
})

/*Crie um projeto node.
- Configure um script de start
- Configure um script dev utilizando o nodemon
- Crie um servidor express que rode na porta 5000
- Crie uma rota GET /health que retorne um JSON: {"status": "running"}*/