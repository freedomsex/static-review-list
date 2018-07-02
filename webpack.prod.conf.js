const path = require('path');
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = merge(baseWebpackConfig, {
  output: {
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
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'disabled',
    }),
  ],

});

module.exports = webpackConfig;
