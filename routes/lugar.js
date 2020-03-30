var express = require("express");
var router = express.Router();
var axios = require("axios");
var tools = require("../public/javascripts/tools");

/* GET lugar. */
router.get("/", function(req, res, next) {
  res.render("lugar", {
    title: "Lugares"
  });
});
module.exports = router;
