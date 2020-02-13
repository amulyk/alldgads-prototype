const NextI18Next = require("next-i18next").default;

const languages = ['en', 'uk', 'ru'];

const options = {
  browserLanguageDetection: false,
  defaultLanguage: "uk",
  otherLanguages: ["en","ru"],
  localePath: typeof window === 'undefined' ? 'public/static/locales' : 'static/locales'
};

const NextI18NextInstance = new NextI18Next(options);

NextI18NextInstance.i18n.languages = languages;

module.exports = NextI18NextInstance;