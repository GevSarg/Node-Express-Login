const Joi = require("joi");

const schema = Joi.object({
  fullname: Joi.string().min(3).max(100).required().messages({
    "string.base": "Full name must be a string",
    "string.empty": "Full name cannot be empty",
    "string.min": "Full name must be at least 3 characters long",
    "string.max": "Full name cannot be longer than 100 characters",
    "any.required": "Full name is required",
  }),
  age: Joi.number().integer().min(18).max(100).required().messages({
    "number.base": "Age must be a number",
    "number.integer": "Age must be an integer",
    "number.min": "Age must be at least 18",
    "number.max": "Age cannot be more than 100",
    "any.required": "Age is required",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Email must be a valid email address",
    "string.empty": "Email cannot be empty",
    "any.required": "Email is required",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.base": "Password must be a string",
      "string.pattern.base":
        "Password must be between 3 and 30 characters and contain only letters and numbers",
      "string.empty": "Password cannot be empty",
      "any.required": "Password is required",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.base": "Confirm password must be a string",
    "any.only": "Confirm password must match the password",
    "any.required": "Confirm password is required",
  }),
});

async function checkValidation(req, res, next) {
  if (req.body.email) {
    req.body.email = req.body.email.toLowerCase();
  }

  try {
    const body = await schema.validateAsync(req.body);
    res.locals.newUser = body;
    next();
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = checkValidation;
