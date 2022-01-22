const express = require("express")
const sampleroutes = express.Router()

const sampleController = require("../controllers/sampleController")

sampleroutes.get("/hello", sampleController.helloWorld)
sampleroutes.get("/parametro", sampleController.parametro)
sampleroutes.get("/rota/:id", sampleController.rota)
sampleroutes.get("/cadastrar", sampleController.cadastrar)

module.exports = sampleroutes