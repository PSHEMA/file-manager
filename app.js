const express = require('express');
const dotenv = require('dotenv');
const authroutes = require('./src/routes/authRoutes');
const fileRoutes = require('./src/routes/fileRoutes');
const {middleware} = require('./src/config/i18n');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(middleware);

// Routes
app.use('/auth', authroutes);
app.use('/files', fileRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: req.t('Welcome to the File Manager API')
  });
});

module.exports = app;