//Importe o express
const express = require("express")

//crie o servidor
const server = express()

//(RECOMENDADO: importações do router não devem ficar acima deste comando) faça o server usar json 
server.use(express.json())
//importe o router
const { router: taskRouter } = require("./routes/task")
const { router: userRouter } = require("./routes/user")

//use ele
server.use("/api", taskRouter)
server.use("/api", userRouter)


//faça o servidor escutar uma porta
const port = 5000
server.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})

//faça o get health para verificar se o servidor está funcionando
server.get("/health", (req, res) => {
    res.json({ message: "Server is running!" })
})

