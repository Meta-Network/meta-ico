const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    return config
  },
  target: 'serverless' // for netlify
  // i18n: {
  //   locales: ["en-US", "zh-CN"],
  //   defaultLocale: "en-US",
  // },
})