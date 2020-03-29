var express = require("express");
var router = express.Router();
var axios = require("axios");
var tools = require("../public/javascripts/tools");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "API Rick and Morty"
  });
});

/* GET search. */
router.get("/search", function(req, res, next) {
  res.render("index", {
    title: "API Rick and Morty"
  });
});

/* GET episodios. */
router.get("/episodio", function(req, res, next) {
  tools.getAll("episode").then(data => {
    res.render("episodio", {
      title: "Episodios",
      data: data
    });
  });
});

/* GET lugar. */
router.get("/lugar", function(req, res, next) {
  res.render("lugar", {
    title: "Lugares"
  });
});

/* GET personajes. */
router.get("/pj", function(req, res, next) {
  tools.getAll("character").then(data => {
    res.render("pj", {
      title: "Personajes",
      data: data
    });
  });
});

module.exports = router;
