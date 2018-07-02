const path = require('path');
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = merge(baseWebpackConfig, {
  output: {
    publicPath: '/dist/',
    library: 'StaticReviewList',
    filename: "index.js",
    libraryTarget: "umd",
    // libraryTarget: 'window',
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
