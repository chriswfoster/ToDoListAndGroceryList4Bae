var express = require("express")
var routes = express.Router()

routes.get("/api/getItems", (req, res) => {
 req.app.get("db").getItems().then(response => res.status(200).json(response))
})

routes.post(
  "/api/additem",
  (req, res) => console.log(req) && res.status(200).send("done")
)

module.exports = routes
