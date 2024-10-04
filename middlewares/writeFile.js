const fs = require("fs");
const path = require("path");

function writeFile(req, res, next) {
  const { newUser } = res.locals;

  fs.writeFile(
    path.join(__dirname, "../db/users.json"),
    JSON.stringify(newUser, null, 2),
    "utf-8",
    (err) => {
      if (err) {
        return next(err);
      }

      //   res.send("User successfully added!");

      next();
    }
  );
}

module.exports = writeFile;
