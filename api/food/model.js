var mongoose = require('mongoose')

var FoodSchema = new mongoose.Schema({
  foodOption: String
})

module.exports = mongoose.model('Food', FoodSchema)
