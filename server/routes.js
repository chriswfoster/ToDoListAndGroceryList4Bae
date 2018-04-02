var express = require("express")
var routes = express.Router()

routes.get("/api/getItems", (req, res) => {
  req.app
    .get("db")
    .getItems()
    .then(response => res.status(200).json(response))
})

routes.post("/api/additem", (req, res) =>
  req.app
    .get("db")
    .addItem(req.query.item, req.query.type)
    .then(response => res.status(200).json(response))
)

routes.delete("/api/wipelist/:id", (req, res) =>
  req.app
    .get("db")
    .removeAllItems(req.params.id)
    .then(response => res.status(200).json(response))
)

routes.delete("/api/deleteitem/:id" , (req, res) =>
  req.app
    .get("db")
    .removeItem(req.params.id)
    .then(response => res.status(200).json(response))
)

module.exports = routes
