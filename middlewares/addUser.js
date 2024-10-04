const bcrypt = require("bcrypt");

function addUser(req, res, next) {
  const { users, newUser } = res.locals;

  const id = crypto.randomUUID();
  newUser.id = id;

  const newPassword = bcrypt.hashSync(newUser.password, 11);
  newUser.password = newPassword;

  delete newUser.confirmPassword;

  users.push(newUser);

  res.locals.newUser = users;
  next();
}

module.exports = addUser;
