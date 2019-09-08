// Dependecies
const Comments = require('../models/comments')
// const Topics = require('../models/topics')

/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
module.exports = function (app) {
  // Load index page
  app.get('/login', function (req, res) {
    res.render('login.html')
  })
  app.get('/', function (req, res) {
    res.render('index.html')
  })
  // Load Commentspage and pass in an Commentsby id
  app.get('/board/:id', function (req, res) {
    Comments.displayBoard({ where: { id: req.params.id } })
      .then(function (dbComments) {
        res.render('board', {
          comments: dbComments
        })
      })
  })

  app.get('/all', function (req, res) {
    res.render('all.html')
  })

  app.get('/board/dogs', function (req, res) {
    res.render('dogs.html')
  })

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.status(404).end()
  })
}
