var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.All(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
      res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
    var burgerId = req.body.id;
    console.log(burgerId);
    burger.Update(burgerId, function(result) {
        res.redirect("/")
    })
})

module.exports = router;