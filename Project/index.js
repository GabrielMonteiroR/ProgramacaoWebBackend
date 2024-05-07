const express = require("express")
const { router } = require("./routes/movies")

const server = express()
server.use(express.json())

server.get("/health", (req, res) => {
    res.json({
        status: "Running"
    })
})

server.use("/api", router)

const port = 8080
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})