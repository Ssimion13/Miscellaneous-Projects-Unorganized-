const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const levelSchema = new Schema({
  name: {
    type: String,
    require: true
  }
  type: {
    type: String,
    enum: ["Battle Mode", "Gran Prix", "Versus"]
  }
});

module.exports = mongoose.model("Level", levelSchema);
