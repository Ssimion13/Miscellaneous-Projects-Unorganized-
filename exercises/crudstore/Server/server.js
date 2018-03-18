const express = require('express');
const app = express();``
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/product", require('./routes/product'));

mongoose.connect("mongoDB://localhost/products-list", err => {
    if (err) throw err;
    console.log("Connected to the database");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})
