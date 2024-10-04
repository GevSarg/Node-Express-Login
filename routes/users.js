var express = require("express");
var router = express.Router();
const readFile = require("../middlewares/readFile.js");

/* GET users listing. */
router.get("/", readFile, function (req, res, next) {
  res.render("users", { users: res.locals.users });
});

module.exports = router;
