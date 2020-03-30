var express = require("express");
var router = express.Router();
var axios = require("axios");
var tools = require("../public/javascripts/tools");

/* GET personajes. */
router.get("/", function(req, res, next) {
  tools.getAll("character").then(data => {
    res.render("pj_all", {
      title: "Personajes",
      data: data
    });
  });
});

/* GET personaje x */
router.get("/:pid", function(req, res, next) {
  tools.getbyId("character", req.params.pid).then(data => {
    let lid1 = "";
    let lid2 = "";
    try {
      lid1 = data.origin.url.match(/\/(\d+)+[\/]?/)[1];
    } catch (error) {
      console.log(error);
    }
    try {
      lid2 = data.location.url.match(/\/(\d+)+[\/]?/)[1];
    } catch (error) {
      console.log(error);
    }
    tools.getAll("episode").then(episodes => {
      res.render("pj", {
        title: "Ficha Personaje",
        data: data,
        lid1: lid1,
        lid2: lid2,
        episodes: episodes.filter(
          episode => data.episode.indexOf(episode.url) > -1
        )
      });
    });
  });
});

module.exports = router;
