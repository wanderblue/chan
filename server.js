// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************
/* eslint-disable no-unused-vars */

// require('dotenv').config()

const express = require('express')
// const exphbs = require('express-handlebars')

const db = require('./models/topics') // eslint-disable no-unused-consts

const app = express()
const PORT = process.env.PORT || 8000
// const ENV = process.env.NODE_ENV || 'development'

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

// Routes
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// Starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT)
})

module.exports = app
/* eslint-enable no-unused-vars */
