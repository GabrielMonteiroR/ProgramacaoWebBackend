const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    try {
    const token = req.headers.authorization
    if(!token) return res.status(401).send()
    jwt.verify(token, process.env.TOP_SECRET)
next()
    } catch(error) {
       res.status(401).send() 
    }
}

module.exports = {
    auth
}