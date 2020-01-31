// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const NextI18Next = require('next-i18next/dist/commonjs').default;

const localeSubpathVariations = {
  none: {},
  foreign: {
    en: 'en',
    ru: 'ru',
  },
  all: {
    en: 'en',
    ru: 'ru',
    uk: 'uk',
  },
};

module.exports = new NextI18Next({
  otherLanguages: ['en', 'ru'],
  localeSubpaths: localeSubpathVariations.foreign,
});
