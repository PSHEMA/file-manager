const express = require('express');
const dotenv = require('dotenv');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// internalize setup
i18next
    .use(Backend)
    .use(middleware.LanguageDetector)
    .init({
        fallbackLng: 'en',
        backend: {
          loadPath: './src/locales/{{lng}}.json'
        },
        detection: {
            order: ['cookie', 'header', 'querystring', 'path', 'subdomain'],
            lookupFromPathIndex: 0,
        },
    });

app.use(middleware.handle(i18next));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    message: req.t('Welcome to the File Manager API')
  });
});

module.exports = app;