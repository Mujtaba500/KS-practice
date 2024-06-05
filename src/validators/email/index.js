import Joi from "joi";

const emailValidator = {
  send: (req, res, next) => {
    const schema = Joi.object({
      recipent: Joi.string().max(50).required(),
      subject: Joi.string().max(50).required(),
      text: Joi.string().max(50).required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: "Invalid data Entered ",
      });
    }
    next();
  },
};

export default emailValidator;
