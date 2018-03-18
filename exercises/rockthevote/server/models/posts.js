const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comments: {
    type: [],
    username: String,
    comment: String
  },
  karma: {
    type: Number,
    default: 0
  }

})

module.exports = mongoose.model("Post", postSchema);
