var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'API Rick and Morty'
  });
});

/* GET episodios. */
router.get('/episodio', function (req, res, next) {
  res.render('episodio', {
    title: 'Episodios'
  });
});

/* GET lugar. */
router.get('/lugar', function (req, res, next) {
  res.render('lugar', {
    title: 'Lugares'
  });
});

/* GET personajes. */
router.get('/pj', function (req, res, next) {
  res.render('pj', {
    title: 'Personajes'
  });
});


module.exports = router;