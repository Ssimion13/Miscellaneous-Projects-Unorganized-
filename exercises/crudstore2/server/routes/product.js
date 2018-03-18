const express = require("express");
const productRoutes = express.Router();
const Product = require("../models/product.js");

productRoutes.get("/", (req, res) => {
  Product.find((err, products) => {
    if (err) return res.status(500).send(err);
    return res.send(products)
  })
})

productRoutes.get("/:id", (req,res) => {
  product.findById(req.params.id, (err.product) => {
    if (err) return res.status(500).send(err);
    return res.send(products);
  }
})
