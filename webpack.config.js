// var webpack = require('webpack');
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    //  new webpack.NoErrorsPlugin()
  ]
}
