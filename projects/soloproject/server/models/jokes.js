const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  URL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Joke", jokeSchema);
