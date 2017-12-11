const path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
      contentBase: path.resolve(__dirname, 'build/html'),
      host: '0.0.0.0',
      port: process.env.PORT || 3003
  },
  entry: {
      index: path.resolve(__dirname, 'source/index.js')
  },
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"',
        'process.env.DEBUG': Boolean(process.env.DEBUG)
    })
  ]
};