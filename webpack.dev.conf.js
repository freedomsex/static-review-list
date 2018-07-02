const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const devWebpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: ['./src/preview.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      xhtml: true,
    }),
  ]
});

module.exports = devWebpackConfig;
