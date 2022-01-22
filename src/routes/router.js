const express = require("express")
const router = express.Router()

const sampleRoutes = require("./sampleRoutes")
const eadRoutes = require("./eadRoutes")

router.use("/api/v1/", sampleRoutes)
router.use("/api/v1/", eadRoutes)

module.exports = router