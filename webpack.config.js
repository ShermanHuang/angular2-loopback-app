let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    'polyfills': './client/polyfills.ts',
    'vendor': './client/vendor.ts',
    'main': './client/main.ts'
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: './client/build',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.ts', '.png']
  },
  module: {
    loaders: [
      {
        test: /\.[jt]s$/,
        loaders: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  // we need this due to problems with es6-shim
  node: {
    global: 'window',
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};

module.exports = config;
