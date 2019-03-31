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
  particle: path.join(paths.entry, 'particle.js'),
  app: path.join(paths.entry, 'mypage/app.jsx'),
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
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: [
            '@babel/plugin-transform-react-jsx', 
            ['@babel/plugin-transform-runtime', {
              'regenerator': true
            }],
          ],
          presets: [
            '@babel/preset-env',
            '@babel/react'
          ],
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['json', '.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ]
};
