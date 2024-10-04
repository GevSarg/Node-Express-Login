function checkEmail(req, res, next) {
  const { users } = res.locals;
  const { email } = req.body;

  const emailExists = users.some((user) => user.email === email);

  if (emailExists) {
    return res
      .status(400)
      .send("Email already exists. Please use a different email.");
  }

  next();
}

module.exports = checkEmail;
