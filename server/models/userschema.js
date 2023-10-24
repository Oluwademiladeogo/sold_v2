const joi = require("joi");
module.exports = joi.object({
  name: joi.string().min(4).max(100).required(),
  email: joi.string().min(5).max(255).email().required(),
  password: joi
    .string()
    .min(8)
    .max(255)
    .required()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    
});
