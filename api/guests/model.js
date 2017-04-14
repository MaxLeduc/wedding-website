var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  isComing: String,
  isBringingGuest: String,
  dinerChoice: String,
  allergies: String,
  personalMessage: String
})

module.exports = mongoose.model('Post', PostSchema)
