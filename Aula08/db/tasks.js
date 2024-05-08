const { prisma } = require("./prisma")

const findTasks = async () => {
    const tasks = await prisma.task.findMany()
    return tasks
}

const findTaskById = async (id) => {
    const task = await prisma.task.findUnique({
        where: {
            id
        }
    })
    return task
}

const createTask = async (data) => {
    const task = await prisma.task.create({
        data
    })
    return task
}

const updateTask = async (id, data) => {
    const task = await prisma.task.update({
        where: {
            id
        },
        data
    })
    return task
}

const deleteTask = async (id) => {
    await prisma.task.delete({
        where: {
            id
        }
    })
}

module.exports = {
    findTasks,
    findTaskById,
    createTask,
    updateTask,
    deleteTask
}
