const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      constants: path.resolve(__dirname, './src/constants/'),
      models: path.resolve(__dirname, './src/models/'),
      server: path.resolve(__dirname, './src/server/'),
      styles: path.resolve(__dirname, './src/styles/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
  },
};
