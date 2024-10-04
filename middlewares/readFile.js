const fs = require("fs");
const path = require("path");

function readFile(req, res, next) {
  fs.readFile(
    path.join(__dirname, "../db/users.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        return next(err);
      }

      res.locals.users = JSON.parse(data);
      next();
    }
  );
}

module.exports = readFile;
