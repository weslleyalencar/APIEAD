const express = require("express")
const routes = require("./routes/router")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(routes)
app.use(cors())

module.exports = app