var express = require("express");
var router = express.Router();
var axios = require("axios");
var tools = require("../public/javascripts/tools");

/* GET lugar. */
router.get("/", function(req, res, next) {
  tools.getAll("location").then(data => {
    res.render("lugar_all", {
      title: "Lugares",
      data: data
    });
  });
});

/* GET lugar x */
router.get("/:lid", function(req, res, next) {
  tools.getbyId("location", req.params.lid).then(data => {
    tools.getAll("character").then(pjs => {
      res.render("lugar", {
        title: data.name,
        data: data,
        pjs: pjs.filter(pj => data.residents.indexOf(pj.url) > -1)
      });
    });
  });
});

module.exports = router;
