var Guest = require('./model')

exports.index = function (req, res) {
  Guest.find()
  .then(guests => res.send(guests))
  .catch(err => {
    res.status(404)
    res.send(err)
  })
}

exports.create = function (req, res) {
  let guest = new Guest()
  const { email,
          validationCode,
          firstName,
          lastName,
          isComing,
          dinerChoice,
          allergies,
          personalMessage,
          isBringingGuest,
          guestFirstName,
          guestLastName,
          guestDinerChoice,
          guestAllergies } = req.body.url

  guest.email = email
  guest.firstName = firstName
  guest.lastName = lastName
  guest.isComing = isComing
  guest.dinerChoice = dinerChoice
  guest.allergies = allergies
  guest.personalMessage = personalMessage
  guest.isBringingGuest = isBringingGuest
  guest.guestFirstName = guestFirstName
  guest.guestLastName = guestLastName
  guest.guestDinerChoice = guestDinerChoice
  guest.guestAllergies = guestAllergies

  guest.save()
  .then((guest) => {
    res.send(guest)
  })
  .catch((err) => {
    res.send(err)
  })
}

// exports.destroy = function (req, res) {
//   Image.remove({ _id: req.params.id })
//   .then(() => {
//     res.sendStatus(200)
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// }