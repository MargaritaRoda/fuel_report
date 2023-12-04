const { merge } = require('webpack-merge');
const { config, PUBLIC_URL } = require('./webpack.common');
const path = require('path');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
      publicPath: PUBLIC_URL + '/',
    },
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
});
