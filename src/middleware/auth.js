import jwt from "jsonwebtoken";
import tokenModel from "../model/token/token.js";

const middlewareAuth = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
  token = token.replace("Bearer ", "");

  const tokenDb = await tokenModel.findOne({
    where: {
      token: token,
    },
  });
  if (!tokenDb) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    console.log(decoded, "req.body");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
};

export default middlewareAuth;
