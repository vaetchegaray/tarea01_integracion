var express = require("express");
var router = express.Router();
var axios = require("axios");
var tools = require("../public/javascripts/tools");

/* GET personajes. */
router.get("/", function(req, res, next) {
  tools.getAll("character").then(data => {
    res.render("pj", {
      title: "Personajes",
      data: data
    });
  });
});

/* GET personaje x */
router.get("/:pid", function(req, res, next) {
  tools.getbyId("character", req.params.pid).then(data => {
    res.render("pj", {
      title: "Ficha Personaje",
      data: data
    });
  });
});

module.exports = router;
