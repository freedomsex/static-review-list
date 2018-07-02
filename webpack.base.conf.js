const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const formatter = require('eslint-friendly-formatter');

let styleLoader = 'style-loader';
if (process.env.NODE_ENV === 'production') {
  styleLoader = MiniCssExtractPlugin.loader;
}

module.exports = {
  entry: {
    // app: ['./src/index.js'],
    app: ['./src/components/ReviewList.vue'],
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    alias: {
      // vue$: 'vue/dist/vue.esm.js',
      '~components': path.resolve(__dirname, './src/components/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          quiet: true,
          formatter,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          // loaders: [
          //   // styleLoader,
          //   'css-loader',
          //   'postcss-loader',
          //   'less-loader',
          // ],
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new CircularDependencyPlugin(),
  ],
  mode: process.env.NODE_ENV,

  stats: {
    entrypoints: false,
    children: false,
  },
};
