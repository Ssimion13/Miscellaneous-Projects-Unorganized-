const express = require("express");
const songRoutes = express.Router();





// for all
songRoutes.get("/songs", (req, res) => {
  res.send(songs)
})
//for one
songRoutes.get("/songs/:id", (req, res) => {
  res.send(songs)
})

songRoutes.post("/songs", (req,res) => {
   return  songs.push(req.body)
})
songRoutes.delete("/songs", (req, res) => {
  res.send(songs)
})
songRoutes.put("/songs/:id", (req, res) => {
  res.send(songs)
})

module.exports = songRoutes
