const { hash, hashSync } = require("bcrypt")
const { prisma } = require("../db/prisma")


const findUserByEmail = async (email) => {
    const user = await prisma.users.findFirst({
        where: {
            email
        }
    })
    return user
}


const createUser = async (data) => {
    await prisma.users.create({
        data: {
            email: data.email,
            password: hashSync(data.password,10)
        }
    })
}






    module.exports = {
        createUser,
        findUserByEmail
    }