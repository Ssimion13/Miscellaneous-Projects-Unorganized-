const express = require("express");
const movieRoutes = express.Router();



movieRoutes.get("/", (req, res) => {
  res.send(`${req.method} request to ${req.url}`);
  res.send(movies)
})
//for one
movieRoutes.get("/:id", (req, res) => {
  res.send(`${req.method} request to ${req.url}`);
  res.send(movies)
})

movieRoutes.post("/", (req,res) => {
  res.send(`${req.method} request to ${req.url}`);
   return  movies.push(req.body)
})
movieRoutes.delete("/", (req, res) => {
  res.send(`${req.method} request to ${req.url}`);
  res.send(movies)
})
movieRoutes.put("/:id", (req, res) => {
  res.send(`${req.method} request to ${req.url}`);
  res.send(movies)
})

module.exports = movieRoutes
