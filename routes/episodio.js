var express = require("express");
var router = express.Router();
var axios = require("axios");
var tools = require("../public/javascripts/tools");

// GET episodios
router.get("/", function(req, res, next) {
  tools.getAll("episode").then(data => {
    res.render("index", {
      title: "Lista de capítulos",
      data: data
    });
  });
});

/* GET episodio x */
router.get("/:eid", function(req, res, next) {
  tools.getbyId("episode", req.params.eid).then(data => {
    tools
      .getbymultipleId("character", tools.getIds(data.characters))
      .then(pjs => {
        res.render("episodio", {
          title: "Episodio",
          data: data,
          pjs: pjs
        });
      });
  });
});

module.exports = router;
