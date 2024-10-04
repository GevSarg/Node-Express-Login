const bcrypt = require("bcrypt");

async function checkLogin(req, res, next) {
  const body = req.body;
  const { users } = res.locals;

  const user = users.find((u) => u.email === body.email);

  if (user) {
    try {
      const passwordMatch = await bcrypt.compare(body.password, user.password);

      if (passwordMatch) {
        res.locals.user = user;
        next();
      } else {
        res.status(401).send("Invalid password");
      }
    } catch (error) {
      res.status(500).send("Server error");
    }
  } else {
    res.status(404).send("User not found");
  }
}

module.exports = checkLogin;
