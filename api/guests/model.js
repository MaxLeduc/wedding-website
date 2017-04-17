var mongoose = require('mongoose')

require('../food/model')

var GuestSchema = new mongoose.Schema({
  email: String,
  validationCode: String,
  firstName: String,
  lastName: String,
  isComing: Boolean,
  dinerChoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  allergies: String,
  personalMessage: String,
  isBringingGuest: Boolean,
  guestFirstName: String,
  guestLastName: String,
  guestDinerChoice: String,
  guestAllergies: String
})

module.exports = mongoose.model('Guest', GuestSchema)
