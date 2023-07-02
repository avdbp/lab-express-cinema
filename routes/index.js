const express = require('express');
const router = express.Router();
const Movie = require('../model/Movie.model.js');





/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index', { isIndexPage: true });
  });
  
router.get("/movies", (req, res, next) => {
    Movie.find()
      .then((movies) => {
        res.render("movies", { movies, isMoviesPage: true });
      })
      .catch((err) => {
        res.send(`Error en /movies: ${err}`);
      });
  });
  
  router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
      .then((movies) => {
        res.render("id", { movies, isIdPage: true });
      })
      .catch((err) => next(err));
  });

  

  

module.exports = router;
