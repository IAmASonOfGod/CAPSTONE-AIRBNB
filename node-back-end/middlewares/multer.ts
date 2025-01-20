import multer from "multer";
import path from "path";
import { Request } from "express";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.resolve(__dirname, "uploads");
console.log("uploadsDir :", uploadDir)

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
