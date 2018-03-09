const express = require("express")
const app = express();
const uuid = require('uuid/v1');
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const bounties = [
  {

    fName: "John",
   lName: "Wayne",
   Living: "DEAD",
   bAmount: "9001",
   type: "Jedi",
   id: "12"
   },
   {fName: "Billy",
    lName: "Mays",
    Living: "DEAD",
    bAmount: "1999",
    type: "Sith",
    id: "13"
    },
    {fName: "Wayne",
     lName: "Wayne",
     Living: "ALIVE",
     bAmount: "808000",
     type: "Jedi",
     id: "14"
     },
     {fName: "Bob",
      lName: "Saget",
      Living: "ALIVE",
      bAmount: "21381908",
      type: "Sith",
      id: "15"
      },
]

app.get("/bounties", (req,res) => {
  if(req.query.type) {
    return res.send(bounties.filter(bounties => bounties.type === req.query.type)
  )}
  res.send(bounties)

})

app.get("/bounties/:id", (req, res) => {
  const foundBounty = bounties.find(person => person.id === req.params.id);
  console.log(req.params.id);
  res.send(foundBounty)
})

app.post("/bounties", (req,res) => {
  req.body.id = uuid();
  console.log(req.body);
  bounties.push(req.body);
  return res.send(req.body);
})

app.put("/bounties/:id", (req, res) => {
  const foundBounty = bounties.find(person => person.id === req.params.id);
  for(let key in req.body){
      foundBounty[key] = req.body[key];
    }
    return res.send(req.body);
  })

app.delete("/bounties/:id", (req, res) => {
  const foundBounty = bounties.find(person => person.id === req.params.id);
    bounties.splice(bounties.indexOf(foundBounty), 1)
  return res.send(req.body);
})

app.listen(4000, () => {
  console.log("Listening in port 4000.")
});
