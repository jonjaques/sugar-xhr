var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    lib: "./index",
  },
  output: {
    path: 'dist',
    filename: "index.js",
    library: 'sugar-xhr',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'superagent': true,
    'url': true,
    'es6-promise': true,
    'object-assign': true
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        include: [path.resolve('.')],
        loaders: ['babel-loader'] 
      }
    ]
  }
}