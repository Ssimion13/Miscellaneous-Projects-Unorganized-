const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const uuid = require('uuid/v1');

app.use(bodyParser.json());

const teeth = [
  {id: 1, type: "molar - wisdom"},
  {id: 1, type: "molar"},
  {id: 1, type: "molar"},
  {id: 1, type: "molar"},
  {id: 1, type: "molar"},
  {id: 1, type: "canine"}
]

app.get("/teeth", (req,res) => {
  res.send(teeth)
})

app.post("/teeth", (req, res) => {
  req.body.id = uuid();
  console.log(req.body)
  teeth.push(req.body);
  return res.send(req.body);
})



app.listen(8000, () => {
  console.log("Testing our server...Port 8000");
});
