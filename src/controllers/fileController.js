const path = require('path');
const fs = require('fs');
const File = require('../models/File');
const fileProcessingQueue = require('../config/queue');

const uploadFile = async (req, res) => {
  try {
    const file = await File.create({
      name: req.file.filename,
      path: req.file.path,
      userId: req.user.id
    });

    fileProcessingQueue.add({
      fileId: file.id,
      filepath: file.path
    });

    res.status(201).json({ message: req.t('File uploaded successfully'), file });
  } catch (error) {
    res.status(400).json({ error: req.t(error.message) });
  }
};

const listFiles = async (req, res) => {
  try {
    const files = await File.findAll({ where: { userId: req.user.id } });
    res.status(200).json({ files });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const deleteFile = async (req, res) => {
  try {
    const file = await File.findByPk(req.params.id);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }
    if (file.userId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    fs.unlinkSync(path.join(__dirname, '../../', file.path));
    await file.destroy();
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { uploadFile, listFiles, deleteFile };