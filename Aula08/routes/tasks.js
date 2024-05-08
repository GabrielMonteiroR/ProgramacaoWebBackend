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

const findTask = (id) => {
    return tasks.find(task => task.id === id)
}

const createTask = (data) => {
    const task = {
        id: tasks.length + 1,
        description: data.description
    }
    tasks.push(task)
    return task
}

const updateTask = (id, data) => {
    const task = findTask(id)
    if (!task) return null
    task.description = data.description
    return task
}

const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id)
}

router.get("/tasks", (req, res) => {
    res.json(tasks)
})

router.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const task = findTask(id)
    if (!task) return res.status(404).json({ message: `Task with id ${id} not found` })
    res.json(task)
})

router.post("/tasks", (req, res) => {
    const data = req.body
    const task = createTask(data)
    res.status(201).json(task)
})

router.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const task = updateTask(id, req.body)
    if (!task) return res.status(404).json({ message: `Task with id ${id} not found` })
    res.json(task)
})

router.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    deleteTask(id)
    res.status(204).send()
})

module.exports = {
    router
}
