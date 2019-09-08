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
class Comments {
  constructor (table = 'comments') {
    this.table = table
  }

  /**
   *
   * Find all topics in the board
   * @returns Promise
   * @memberof Example
   */
  displayBoard (boardName) {
    return knex(this.table)
      .where('board', boardName)
  }
  findAuthor (author) {
    return knex(this.table)
      .where('userName', author)
  }
  findTopic (topic) {
    return knex(this.table)
      .where('topic', topic)
  }

  /**
   * create a new topic
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
}

module.exports = new Comments()
