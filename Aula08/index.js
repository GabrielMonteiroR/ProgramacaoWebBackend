const express = require("express")
const { router } = require("./routes/tasks")

const server = express()
server.use(express.json())

server.get("/health", (req, res) => {
    res.json({
        status: "Running"
    })
})

server.use("/api", router)

const port = 5000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})