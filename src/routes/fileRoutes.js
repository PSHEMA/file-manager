const express = require('express');
const { uploadFile, listFiles, deleteFile } = require('../controllers/fileController');
const { authenticate } = require('../middlewares/authMiddleware');
const { upload, ensureUserDir } = require('../middlewares/fileUpload');

const router = express.Router();

router.post('/upload', authenticate, ensureUserDir, upload.single('file'), uploadFile);
router.get('/', authenticate, listFiles);
router.delete('/:id', authenticate, deleteFile);

module.exports = router;