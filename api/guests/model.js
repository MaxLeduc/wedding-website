var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
  // title: String,
  // description: String,
  // image: String,
  // posted_by: String,
  // like_count: Number
  greeting: String
})

module.exports = mongoose.model('Post', PostSchema)
