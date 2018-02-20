var express = require('express');
var router = express.Router();
var Movie = require('../models').Movie;

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
