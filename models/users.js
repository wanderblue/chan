// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection.js')

/**
 * Queries the Example database
 *
 * @class Example
 */
class Users {
  constructor (table = 'loginInfo') {
    this.table = table
  }

  /**
   * create a new user
   *
   * @param {Object} values The values to insert in the form of {column: value}
   * @returns Promise
   * @memberof Todo
   */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }
  update (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }
}

module.exports = new Users()
