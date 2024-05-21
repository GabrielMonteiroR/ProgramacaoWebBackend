const express = require("express")
const { createUser, findUserByEmail } = require("../db/user")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')



router.post("/register", async (req, res) => {
    const userAlreadyExists = await findUserByEmail(req.body.email)
    const data = req.body
    if (userAlreadyExists) return res.status(400).json({ message: "User already exists!" })
    await createUser(data)
    delete data.password
    res.json(data)
})

router.post("/login", async (req, res) => {
    const user = await findUserByEmail(req.body.email)
    const isPasswordTheSame = bcrypt.compareSync(req.body.password, user.password)
    if (!isPasswordTheSame) return res.status(401).json({ message: "Invalid credential" })
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.TOP_SECRET, { expiresIn: "10h" })
    res.json({
        success: true,
        token
    })

})

module.exports = {
    router
}