var express = require('express')
var app = express()
var webpackMiddleware = require('webpack-dev-middleware')
var webpack = require('webpack')

// require mongoose
// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/trading')

// parse the json - npm install body-parser
// var bodyParser = require('body-parser')
// app.use(bodyParser.json())

app.use(webpackMiddleware(webpack(require('./webpack.config.js'))))

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'))

// Serve your static assets here. You'll need to use express.static middleware.
app.use('/api/guests', require('./api/guests'))

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(8080)
