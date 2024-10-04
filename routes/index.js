var express = require("express");
const readFile = require("../middlewares/readFile.js");
const checkLogin = require("../middlewares/checkLogin.js");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {});
});

router.post("/", readFile, checkLogin, (req, res) => {
  res.redirect("/users");
});

module.exports = router;
