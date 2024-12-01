const i18n = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');
const path = require('path');

i18n
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(__dirname, '../locales/{{lng}}/translation.json'),
    },
    fallbackLng: 'en',
    preload: ['en', 'fr'],
    detection: {
      order: ['querystring', 'header'],
      caches: false,
    },
  });

module.exports = { i18n, middleware: middleware.handle(i18n) };
