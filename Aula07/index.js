const express = require("express")
const server = express()
const { router } = require("./routes/tasks")

server.use(express.json())
server.use(router)
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
