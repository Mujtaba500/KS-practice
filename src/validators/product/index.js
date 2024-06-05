import Joi from "joi";

const productValidator = {
  create: (req, res, next) => {
    //  256 CHARACTERS NAME
    //  NEGATIVE NUMBER
    const schema = Joi.object({
      name: Joi.string().max(50).required(),
      price: Joi.number().positive().required(),
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

export default productValidator;
