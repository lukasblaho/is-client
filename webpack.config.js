var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  publicPath: 'http://client.storage_sys.loc',
  output: { path: __dirname, filename: 'bundle.js' },
  devtool: 'source-map',
  watch: true,
  module: {
    preLoaders: [
      {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
