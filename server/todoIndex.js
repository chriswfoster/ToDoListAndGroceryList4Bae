const express = require("express")
const cors = require("cors")
const { json } = require("body-parser")
const massive = require("massive")
const router = express.Router()
require("dotenv").config()
const port = 3089
const routes = require("./routes.js")

const app = express()
app.get(cors())
app.get(json())
app.use("/", routes)

const massiveConnection = massive(process.env.connectionString) // tell massive to make the connection
  .then(db => app.set("db", db)) // if connection exists, set 'db' to db
  .catch(console.log)

app.use(express.static(`${__dirname}/../build`))

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})

module.exports = router
app.listen(port, () => console.log(`Your are now listening to ${port}FM!`))
