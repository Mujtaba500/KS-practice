import userModel from "../../model/user/index.js";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  signUp: async (req, res) => {
    try {
      const payload = req.body;
      const userCheck = await userModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (userCheck) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }
      const hpassword = await hash(payload.password, 10);
      const newUser = await userModel.create({
        name: payload.name,
        email: payload.email,
        password: hpassword,
      });
      res.json({
        message: "User created successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  signIn: async (req, res) => {
    try {
      const payload = req.body;
      const userCheck = await userModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (!userCheck) {
        res.status(400).json({
          message: "Invalid credentials",
        });
      }
      const comparePassword = await compare(
        payload.password,
        userCheck.password
      );
      if (!comparePassword) {
        res.status(400).json({
          message: "Invalid credentials",
        });
      }
      const data = {
        id: userCheck.id,
        name: userCheck.name,
        email: userCheck.email,
      };
      const token = jwt.sign(data, "jdkgjj");
      res.json(token);
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default userController;
