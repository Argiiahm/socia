import createHttpError from "http-errors";
import multer from "multer";

const storage = multer.memoryStorage();
export const uploadImage = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2mb
  fileFilter: (_req, file, callback) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.mimetype)) {
      return callback(createHttpError.BadRequest("Invalid Image Format"));
    }
    callback(null, true);
  },
});
