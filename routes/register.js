var express = require("express");
const readFile = require("../middlewares/readFile.js");
const checkValidation = require("../middlewares/checkValidation.js");
const addUser = require("../middlewares/addUser.js");
const writeFile = require("../middlewares/writeFile.js");
const checkEmail = require("../middlewares/checkEmail.js");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("register", {});
});
router.post(
  "/",
  readFile,
  checkValidation,
  checkEmail,
  addUser,
  writeFile,
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
