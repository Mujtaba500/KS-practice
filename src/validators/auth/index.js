import Joi from "joi";

const authValidator = {
  signIn: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    next();
  },
  signUp: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    next();
  },
};
export default authValidator;
