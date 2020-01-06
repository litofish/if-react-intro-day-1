'use strict';

const { resolve } = require('path');

module.exports = {
  // entry point into your code. All client code for this app flows through this file
  entry: ['babel-polyfill', './client/index.jsx'],
  output: {
    path: __dirname,
    // output of script file that gets loaded into your browser
    filename: './public/bundle.js'
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Rules define what you need to transpile (which folders and files) and how (loader)
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './client'),
        loader: 'babel-loader'
      }
    ]
  }
};
