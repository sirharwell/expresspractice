var express = require('express');
var router = express.Router();
var Movie = require('../models').Movie;

router.get('/:id/edit', function(req, res) {
  Movie.findById(req.params.id)
  .then( function(movie) {
    return res.render('edit', {movie: movie})
  })
})

router.delete('/:id', functions(req, res) {
  Movie.findById(req.params.id)
  .then( function(movie) { movie.destroy() })
  .then( function() {return res.redirect('/movies')})
})

router.get('/', function(req, res) {
  Movie.all()
    .then( function(movies) {
      res.render('movies', { movies: movies })
    })
})

router.post('/', function(req, res) {
  var title = req.body.title;
  Movie.create({ title: title })
    .then( function() {
      res.redirect('/movies')
    })
})

module.exports = router;
