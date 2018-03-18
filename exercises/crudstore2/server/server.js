const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser")
const port = process.env.port || 7000;

app.use("/product", "../routes/product");

mongoose.connect("mongoDB://localhost/products-list", (req,res) =>{
  if (err) throw err;
  console.log("connected to the DB");
})

app.listen(port, () => {
  console.log("now connected on port " + port)
})
