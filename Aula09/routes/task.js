//importe o express
const express = require("express")

//importe o prisma


//Feito com autoimport
const { createTask, findAllTasks, UpdateTask, deleteTask, findOneTask } = require("../db/task");

//crie uma rota
const router = express.Router()

router.use((req, res, next) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    next()
})


router.post("/task", async (req, res) => {
    try {
        const data = req.body
        await createTask(data)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: "Bad entry, please try again!" })
    }
})



router.get("/tasks", async (req, res) => {
    try {
        const id = req.query.id
        const tasks = await findAllTasks(id)
        res.status(200).json(tasks)
    } catch (error) {
        res.status(404).json({ message: "Tasks not found" })
    }
})

router.get("/task/:id", async (req, res) => {
    try {
        const id = Number(req.params.id)
        const task = await findOneTask(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({ message: "Task not found" })

    }
})

//Crie uma rota para atualizar tasks
router.put("/task/:id", async (req, res) => {
    try {
        const id = Number(req.params.id)
        const data = req.body
        await UpdateTask(id, data)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: "Bad entry, please try again!" })
    }
})

//Crie uma rota para deletar tasks
router.delete("/task/:id", async (req, res) => {
    try {
        const id = Number(req.params.id)
        await deleteTask(id)
        res.status(200).json(`Task with id ${id} sucessful deleted`)
    } catch (error) {
        res.status(404).json({ message: "Task not found" })
    }

})

//exporte sua rota

module.exports = {
    router
}

