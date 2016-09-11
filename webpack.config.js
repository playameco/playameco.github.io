var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSASS = new ExtractTextPlugin('[name].sass');
var extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractSASS,
    extractCSS
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loaders: ["style", "css?sourceMap"]
    },

    {
      test: /\.scss$|\.sass$/,
      loader: extractCSS.extract(['css?sourceMap','sass?sourceMap'])
    },

    { test: /\.png|jpg$/, loader: 'url-loader?name=images/[name].[ext]' },
    { test: /\.(svg|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'url-loader?name=fonts/[name].[ext]' }]
  }
};
