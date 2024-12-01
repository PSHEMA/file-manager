const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userDir = path.join(__dirname, '../../', 'uploads', String(req.user.id));
    cb(null, userDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const ensureUserDir = async (req, res, next) => {
  const userDir = path.join(__dirname, '../../', 'uploads', String(req.user.id));
  await fs.ensureDir(userDir);
  next();
}

const upload = multer({ storage });

module.exports = { upload, ensureUserDir };