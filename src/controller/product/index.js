import categoryModel from "../../model/category/index.js";
import productModel from "../../model/product/index.js";

const productController = {
  getProducts: async (req, res) => {
    try {
      const products = await productModel.findAll();
      if (products.length === 0) {
        return res.json({
          message: "No product found",
        });
      }
      res.json({ data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  getSingle: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await productModel.findByPk(id, {
        include: [{ model: categoryModel, attributes: ["name"] }],
      });
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      res.json({
        data: product,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  createProduct: async (req, res) => {
    try {
      const { name, price, stock, categoryId } = req.body;
      const productExist = await productModel.findOne({
        where: {
          name: name,
        },
      });
      if (productExist) {
        productExist.stock += parseInt(stock);
        await productExist.save();
        return res.json({
          message: "Product stock added",
        });
      }
      const newProduct = new productModel();
      newProduct.name = name;
      newProduct.price = price;
      newProduct.stock = stock;
      await newProduct.save();
      await newProduct.addCategory(categoryId);

      res.json({
        message: "Product created successfully",
        newProduct,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "internal server error",
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const productToDelete = await productModel.findByPk(id);
      console.log(productToDelete);
      if (!productToDelete) {
        res.status(404).json({
          message: "Product you are trying to delete does not exist",
        });
      } else {
        await productModel.destroy({
          where: {
            id: id,
          },
        });
        res.json({
          message: "Product deleted successfully",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};

export default productController;
