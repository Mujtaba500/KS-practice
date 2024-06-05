import Joi from "joi";

const saleValidator = {
  createSale: (req, res, next) => {
    const schema = Joi.object({
      productName: Joi.string().required.max(100),
      productQuantity: Joi.number().positive().required,
      rate: Joi.number().positive().required,
      ProductId: Joi.number().positive().required,
    });

    const { error, value } = schema.validate(req.body.salesProducts);

    if (error) {
      return res.status(400).json({
        message: "Invalid Data entered",
      });
    }
    next();
  },
};

export default saleValidator;
