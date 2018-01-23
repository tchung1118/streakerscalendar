var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/client/publish');
var APP_DIR = path.resolve(__dirname, 'app/client/src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }/*,
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }*/
    ]
  }
};

module.exports = config;