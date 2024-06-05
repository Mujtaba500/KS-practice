import categoryModel from "../../model/category/index.js";

const categoryController = {
  getCategory: async (req, res) => {
    try {
      const categories = await categoryModel.findAll();
      if (categories.length === 0) {
        return res.status(404).json({
          message: "Categories donot exist",
        });
      }
      res.json({ data: categories });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  createCategory: async (req, res) => {
    try {
      const payload = req.body;
      await categoryModel.create({
        name: payload.name,
      });
      res.json({
        message: "Category created successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      });
    }
  },
};

export default categoryController;
