var express = require("express");
var router = express.Router();
var axios = require("axios");
var tools = require("../public/javascripts/tools");

/* GET home page && Get episodios. */
router.get("/", function(req, res, next) {
  tools.getAll("episode").then(data => {
    res.render("index", {
      title: "Rick & Morty API - Lista de capítulos",
      data: data
    });
  });
});

/* GET search. */
router.get("/search", function(req, res, next) {
  res.render("index", {
    title: "API Rick and Morty"
  });
});

module.exports = router;
