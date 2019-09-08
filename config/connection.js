// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies

/* eslint-disable  no-unused-vars */
const mysql = require('mysql')
/* eslint-enable  no-unused-vars */

// Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../knexfile'))
//var connection
//if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  //connection = mysql.createConnection(process.env.JAWSDB_URL);
//} else {
  // Database is local
  //connection = require('knex')(require('../knexfile'))
//};
// Exports the connection for other files to use
module.exports = Knex
