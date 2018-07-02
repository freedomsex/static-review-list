const path = require('path');
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    library: 'static-review-list',
    filename: "index.js",
    libraryTarget: "umd",
  },
  externals: {
    Vue: 'Vue',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),

    new BundleAnalyzerPlugin({
      // openAnalyzer: false,
      // analyzerMode: 'disabled',
    }),
  ],

});

module.exports = webpackConfig;
