var Food = require('./model')

exports.index = function (req, res) {
  Food.find()
  .then(foods => res.send(foods))
  .catch(err => {
    res.status(404)
    res.send(err)
  })
}
