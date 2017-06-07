/*
* @Author: mark
* @Date:   2017-03-01 15:30:19
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-29 23:57:43
*/
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],

  target: 'web',
  devServer: {
      historyApiFallback: true,
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(png|jpg|wav|mp3)$/,
        loader: 'url-loader?limit=4096',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the
    // browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new HTMLWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
  ],
};
