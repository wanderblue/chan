// Dependencies
const Comments = require('../models/comments')
const Users = require('../models/users')
const Topics = require('../models/topics')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all examples
  app.get('/api/board/movies', function (req, res) {
    var boardName = 'movies'
    Comments.displayBoard(boardName)
      .then(results => {
        console.log(`
        *****
        Comments.displayBoard():
         ${results.length ? results : 'No records found'}`)
        res.json(results)
      })
  })
  // Get all examples
  app.get('/api/board/cats', function (req, res) {
    var boardName = 'cats'
    Comments.displayBoard(boardName)
      .then(results => {
        console.log(`
        *****
        Comments.displayBoard():
         ${results.length ? results : 'No records found'}`)
        res.json(results)
      })
  })
  // Get all examples
  app.get('/api/board/:id', function (req, res) {
    console.log(req.params.id)
    Comments.displayBoard(req.params.id)
      .then(results => {
        console.log(`
        *****
        Comments.displayBoard():
         ${results.length ? results : 'No records found'}`)
        res.json(results)
      })
  })
  // Get all examples
  app.get('/api/board', function (req, res) {
    Topics.findAll()
      .then(function (dbTopics) {
        res.json(dbTopics)
      })
  })
  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post('/api/new', function (req, res) {
    Comments.create(req.body)
      .then(results => {
        console.log(`
        *****
        Comments.create():
        ${results}`)

        res.json(results)
      })
  })
  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post('/api/newuser', function (req, res) {
    Users.create(req.body)
      .then(results => {
        console.log(`
        *****
        Comments.create():
        ${results}`)

        res.json(results)
      })
  })

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put('/api/user/:userName', function (req, res) {
    // var updateUser = req.params.userName
    Users.update(req.params, req.body)
      .then(results => {
        console.log(`
        *****
        Users.update():
        ${results}`)

        res.json(results)
      })
  })
  app.get('/api/author/:author', function (req, res) {
    Comments.findAuthor(req.params.author)
      .then(results => {
        console.log(`
        *****
        Comments.findAuthor():
         ${results.length ? results : 'No records found'}`)
        res.json(results)
      })
  })
  app.get('/api/topic/:topic', function (req, res) {
    Comments.findTopic(req.params.topic)
      .then(results => {
        console.log(`
      *****
      Comments.findTopic():
       ${results.length ? results : 'No records found'}`)
        res.json(results)
      })
  })
}
