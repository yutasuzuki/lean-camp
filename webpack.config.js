const fs = require('fs');
const path = require('path');
const globby = require('globby');
const webpack = require('webpack');

const paths = {
  entry: path.join(process.cwd(), 'front', 'scripts'),
  output: path.join(process.cwd(), 'app', 'assets', 'javascripts'),
};

const entry = {
  index: path.join(paths.entry, 'index.js'),
};

module.exports = {
  mode: 'development',
  entry,
  output: {
    path: paths.output,
    filename: '[name].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['env']
        }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['json', '.tsx', '.ts', '.js'],
  },
};
