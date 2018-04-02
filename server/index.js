const express = require("express")
const cors = require("cors")
const { json } = require("body-parser")
const massive = require("massive")
const router = express.Router()

const port = 3089


const app = express()
app.get(cors())
app.get(json())

const massiveConnection = massive(process.env.connectionString) // tell massive to make the connection
  .then(db => app.set("db", db)) // if connection exists, set 'db' to db
  .catch(console.log)


app.get(
  "/api/getItems",
  (req, res) => console.log(req) && res.status(200).send("done")
)
app.post(
  "/api/additem",
  (req, res) => console.log(req) && res.status(200).send("done")
)

module.exports = router
app.listen(port, () => console.log(`Your are now listening to ${port}FM!`))
