const express = require("express");
const app = express();
const uuid = require('uuid/v1');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use("/post", require('./routes/posts.js'));

mongoose.connect('mongodb://localhost/rockTheVote', err => {
  if (err) throw err;
  console.log("DB CONNECTED.")
});



app.listen(port, () => {
  console.log("Listening in port 4000");
})
