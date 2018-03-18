const express = require("express")
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const port = process.env.PORT || 7000;


app.use(bodyParser.json());
app.use(morgan('dev'));


app.use("/bounty", require('./routes/bounties.js'))


mongoose.connect('mongodb://localhost/bountyHunter', err => {
  if (err) throw err;
  console.log("DB Connected.")
})

app.listen(port, () => {
  console.log("Listening in port " + port)
});
