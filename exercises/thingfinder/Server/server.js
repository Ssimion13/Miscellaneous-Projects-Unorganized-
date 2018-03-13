const express = require("express");
const app = express();
const uuid = require('uuid/v1');
const bodyParser = require("body-parser");
const checkingIn = require("./middleware/middleware")


app.use(bodyParser.json());
app.use(checkingIn);

const houses = [{
  type: "straw",
  cost: 4000,
  strength: 1,
  id: "1"
}, {
  type: "sticks",
  cost: 8000,
  strength: 10,
  id: "2"
}, {
  type: "brick",
  cost: 16000,
  strength: 100,
  id: "3"
}]

app.get("/houses", (req, res) => {
  if(req.query.type) {
    return res.send(houses.filter(houses => houses.type === req.query.type)
  )}
  res.send(houses);
})

app.get("/houses/:id", (req,res) => {
  const foundHouse = houses.find(house => house.id === req.params.id);
  console.log(req.params.id);
   console.log(foundHouse);

  return res.send(foundHouse)
})

app.post("/houses", (req,res) => {
  req.body.id = uuid();
  console.log(req.body);
  houses.push(req.body);
  return res.send(req.body);
})





app.listen(8000, ()=>{
  console.log ("listening in port 8000");
})
