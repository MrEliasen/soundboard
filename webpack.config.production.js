/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:44:28
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-29 23:57:52
*/
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    // the output bundle
    path: path.resolve(__dirname, 'dist') + '/[hash]',
    filename: 'output.[hash].bundle.js',
    chunkFilename: '[id].[hash].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        //exclude: /node_modules/,
      },
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                modules: true,
                importLoaders: true,
                localIdentName: '[local]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [
                    require('autoprefixer'),
                  ];
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                includePaths: [
                  'node_modules',
                  'bower_components',
                  'src/Assets',
                ],
              },
            },
          ],
        }),
        //exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|wav|mp3)$/,
        loader: 'url-loader?limit=4096',
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new ExtractTextPlugin({
      filename: 'assets/[hash].main.css',
      allChunks: true,
    }),
    new HTMLWebpackPlugin({
        template: 'index.html',
        inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
