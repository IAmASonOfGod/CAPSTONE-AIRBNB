import multer from "multer";
import path from "path";
import { Request } from "express";
import fs from "fs";

const uploadDir = path.resolve(
  "C:/Users/mbali/OneDrive/Desktop/CAPSTONE-AIRBNB-APP/node-back-end/uploads"
);

// Ensure the "uploads" directory exists, create it if not
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error("Error: Images Only!"));
  }
};

// Create multer upload instance with storage, file filter, and file size limit
const upload = multer({
  storage,
  fileFilter,
});

export interface CustomRequest extends Request {
  file: Express.Multer.File;
}

export default upload;
