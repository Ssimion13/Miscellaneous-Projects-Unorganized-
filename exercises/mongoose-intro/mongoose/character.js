const mongoose = require("mongoose");
const Schema = mongoose.Schema;



//the schema here is a constructor that forces conformity here
const characterSchema = new Schema({
  name: {
    unique: true, //this will ensure that there cannot be another copy of this name or something else.
    type: String,
    required: true
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true //this takes the value and lowercases it.
  }
  coolness: {
    type: Number,
    min: 1,
    max: 10
  }
  isGoodGuy: Boolean,
  //still an array of strings
  favoriteWeapons: [{
    type: String,
    enum: ["Green Shell", "Red Shell", "Blue Shell", "Banana", ]  //enums only allow certain values
  }], //array of only strings
  address: {
      street: String,
      city: String,
      state: {
        type: String,
        minlength: 2,
        maxlength: 2,
        enum: ["AL", "AK", "AR"...]
      }
  }

})

module.exports =  mongoose.model("Character", characterSchema)
//the string inside is the name of the model.
