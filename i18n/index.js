var en = require("./translations.en.json");
var vi = require('./translations.vi.json');

const i18n = {
  translations: {
    en,
    vi,
  },
  defaultLang: "vi",
  useBrowserDefault: false,
};

module.exports = i18n;
