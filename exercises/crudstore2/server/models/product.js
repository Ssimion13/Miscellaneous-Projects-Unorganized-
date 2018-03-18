const express= require("express");
const Schema = mongoose.schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  Brand: {
    type: String,
    required: true
  }
})

 module.exports = mongoose.model("Product", inventorySchema)
