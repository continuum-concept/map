const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        Vendor: path.resolve(__dirname, 'src/vendor/'),
      },
    },
  },
};
