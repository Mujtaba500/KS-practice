import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import categoryModel from "../category/index.js";

const productModel = sequelize.define(
  "Product",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

export default productModel;

productModel.belongsToMany(categoryModel, { through: "Category_Products" });
categoryModel.belongsToMany(productModel, { through: "Category_Products" });
