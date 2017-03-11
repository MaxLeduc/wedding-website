var Guest = require('./model')

exports.index = function (req, res) {
  // Guest.find()
  // .then(guests => res.send(guests))
  // .catch(err => {
  //   res.status(404)
  //   res.send('Not found')
  // })
  res.status(200)
  res.send({greeting: 'hello from the API!'})
}
