const { prisma } = require("./prisma")

//function que busca todas as tasks
const findAllTasks = async (id) => {
    const tasks = await prisma.tasks.findMany({
        where: {
            id
        }
    })
    return tasks
}

//function que busca só uma task
const findOneTask = async (id) => {
    const task = await prisma.tasks.findFirst({
        where: {
            id
        }
    })
    return task
}

//function que cria uma task
const createTask = async (data) => {
    await prisma.tasks.create({
        data
    })
}

//function que faz update em uma task
const UpdateTask = async (id, data) => {
    await prisma.tasks.update({
        data,
        where: {
            id
        }
    })
}

//function que deleta uma task
const deleteTask = async (id) => {
    await prisma.tasks.delete({
        where: {
            id
        }
    })
}

//Exportando as functions para poder utilizar na rota

module.exports = {
    findAllTasks,
    findOneTask,
    createTask,
    UpdateTask,
    deleteTask
}