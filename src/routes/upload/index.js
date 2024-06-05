import { Router } from "express";
import multer from "multer";
import verifyToken from "../../middleware/auth.js";
import uploadFileController from "../../controller/upload/index.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads");
  },
  filename: (req, file, cb) => {
    const name = file.originalname;
    const index = name.search(/\./);
    const format = name.slice(index);
    cb(null, file.fieldname + "-" + Date.now() + format);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1000000, // 1MB
  },
  //validator
  // fileFilter: (req, file, cb) => {
  //   const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

  //   if (!allowedTypes.includes(file.mimetype)) {
  //     const error = new Error("Invalid file type");
  //     error.code = "INVALID_FILE_TYPE";
  //     return cb(error, false);
  //   }

  //   cb(null, true);
  // },
});

const uploadRouter = Router();

uploadRouter.post(
  "/upload_file",
  verifyToken,
  upload.single("img"),
  uploadFileController
);

export { upload };
export default uploadRouter;
