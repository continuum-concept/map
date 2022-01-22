const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        Vendor: path.resolve(__dirname, 'src/vendor/'),
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cc/map/'
    : '/',
};
