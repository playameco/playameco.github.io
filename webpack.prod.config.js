const path = require('path')
const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSASS = new ExtractTextPlugin('[name].sass');
var extractCSS = new ExtractTextPlugin('[name].css');

// var AWS_SDK_BUNDLE = 'aws-sdk/dist/aws-sdk.min.js';

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  // resolve: {
  //   alias: {
  //     'aws-sdk$': AWS_SDK_BUNDLE
  //   }
  // },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
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
}