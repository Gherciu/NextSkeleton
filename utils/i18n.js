const NextI18Next = require('next-i18next/dist/commonjs')

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ro'],
  localeSubpaths: 'foreign',
})

// const changeLangusge = () => i18n.changeLanguage(i18n.language === 'en' ?
// 'ro' : 'en')
