const { prisma } = require("./prisma")

const findMovies = async (rate) => {
    const movies = await prisma.movies.findMany({
        orderBy: {
            rate: "desc"
        },
        where: {
            rate: rate ? Number(rate) : undefined
        }
    })
    return movies
}

const findById = async (id) => {
    const movie = await prisma.movies.findFirst({
        where: {
            id // id: id
        }
    })
    return movie
}

const createMovie = async (data) => {
    const movie = await prisma.movies.create({
        data
    })
    return movie
}

const updateMovie = async (id, data) => {
    const movie = await prisma.movies.update({
        data,
        where: {
            id
        }
    })
    return movie
}

const deleteMovie = async (id) => {
    await prisma.movies.delete({
        where: {
            id
        }
    })
}

module.exports = {
    findMovies,
    findById,
    createMovie,
    updateMovie,
    deleteMovie
}