import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const saleModel = sequelize.define(
  "Sale",
  {
    // Model attributes are defined here
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

export default saleModel;
