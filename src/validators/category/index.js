import Joi from "joi";

const categoryValidator = {
  create: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().max(50).required(),
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

export default categoryValidator;
