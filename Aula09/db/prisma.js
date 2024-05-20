//Importe o prisma
const { PrismaClient } = require("@prisma/client");
//instancie o prisma
const prisma = new PrismaClient()

module.exports = {
    prisma
}