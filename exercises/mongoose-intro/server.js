const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = process.env.PORT || 7000;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


app.use("/characters", require("./routes/character"))

mongoose.connect("mongodb://localhost/mario-kart", (err) =>{
  if(err) throw err;
  console.log("Connected to the database");

});

/* const kartSchema = new Schema({
  name: {
    type: String,
    required: true
    }
  coolness: {
    type: Number,
    min: 1,
    max: 10
  }
  wheels: {
    type: String,
    required: true,
    enum: [Normal, tiny, giant, Bowser]
  }
  Riders: {
    type: String,
    enum: [...characters]
  }
})
*/




app.use(bodyParser.json());
app.use(morgan("dev"));



app.listen()
