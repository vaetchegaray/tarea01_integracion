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
  let episodios = [];
  let personajes = [];
  let lugares = [];
  const search_text = req.query.search_text.toLowerCase();
  tools.getAll("episode").then(eps => {
    tools.getAll("character").then(pjs => {
      tools.getAll("location").then(lugs => {
        lugares = lugares.concat(
          lugs.filter(lug => lug.name.toLowerCase().indexOf(search_text) > -1)
        );
        personajes = personajes.concat(
          pjs.filter(pj => pj.name.toLowerCase().indexOf(search_text) > -1)
        );
        episodios = episodios.concat(
          eps.filter(ep => ep.name.toLowerCase().indexOf(search_text) > -1)
        );
        res.render("search", {
          title: "Resultados de la búsqueda",
          episodios: episodios,
          lugares: lugares,
          personajes: personajes
        });
      });
    });
  });
});

module.exports = router;
