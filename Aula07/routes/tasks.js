const express = require("express")
const router = express.Router()


let tasks = [
    {
        id: 1,
        description: "Tde01"
    },
    {
        id: 2,
        description: "Tde02"
    },
    {
        id: 3,
        description: "Tde03"
    },
    {
        id: 4,
        description: "Tde04"
    }

]

router.get(("/tasks"), (req, res) => {
    res.json(tasks)
})

router.post("/tasks", (req, res) => {
    const data = req.body
    console.log(req.body)
    const task = {
        id: tasks.length + 1,
        description: data.description
    }
    tasks.push(task)
    res.status(201).json({
        message: 'Sucesfully'
    })
})

router.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    const task = tasks.find(task => task.id === id)

    if (!task) return res.status(404).json({ message: "Task not found" })
    task.description = data.description
    res.json({ message: "TASK UPDATED" })
})

router.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    tasks = tasks.filter(movie => movie.id !== id)
    res.status(204).send()
})



module.exports = {
    router
}
