const express = require("express")
const { findMovies, findById, createMovie, updateMovie, deleteMovie } = require("../db/movies")
const router = express.Router()

router.get("/movies", async (req, res) => {
    const movies = await findMovies(req.query.rate)
    res.json(movies)
})

router.get("/movie/:id", async (req, res) => {
    const id = Number(req.params.id)
    const movie = await findById(id)
    if (!movie) return res
        .status(404).json({ message: `Movie with id ${id} not found` })
    res.json(movie)
})

router.post("/movie", async (req, res) => {
    const data = req.body
    const movie = await createMovie(data)
    res.status(201).json(movie)
})

router.put("/movie/:id", async (req, res) => {
    const id = Number(req.params.id)
    const movie = await updateMovie(id, req.body)
    res.json(movie)
})

router.delete("/movie/:id", async (req, res) => {
    const id = Number(req.params.id)
    await deleteMovie(id)
    res.status(204).send()
})

module.exports = {
    router
}