import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const categoryModel = sequelize.define(
  "Category",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

export default categoryModel;
