const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  Living: {
    type: String,
  },
  bAmount: {
    type: Number,
  },
  type: {
    type: String,
  }
})

module.exports = mongoose.model("Bounty", bountySchema)







const bountylisty = [
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
