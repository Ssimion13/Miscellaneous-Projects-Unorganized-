const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require('mongoose');
const port = process.env.PORT || 4000

mongoose.connect('mongodb://localhost/soloProject', err => {
  if(err) throw err;
  console.log("DB Connected.")
})

app.use("/jokes", require('./routes/jokes.js'));
app.use("/dogs", require('./routes/dogs.js'));
app.use("/urls", require('./routes/urls.js'))

app.listen(port, ()=> {
  console.log("Connected on " + port)
})
