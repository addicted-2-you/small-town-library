const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, './src/'),
    },
  },
};
