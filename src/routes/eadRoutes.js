const express = require("express")
const eadroutes = express.Router()

const eadController = require("../controllers/eadController")

eadroutes.get("/ead", eadController.list)

module.exports = eadroutes