const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting',
      template: './index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: /src/,
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        include: /src/,
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: 'src/fonts/[name].[hash:8].[ext]',
        },
      },
    ],

    // loaders: [
    //   {
    //     test: /.jsx?$/,
    //     loader: 'babel-loader',
    //     include: /src/,
    //   },
    // {
    //   test: /\.scss$/,
    //   loader: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: /src/,
    // },
    // {
    //   test: /\.css$/,
    //   loaders: [
    //     'style-loader', 'css-loader',
    //   ],
    // },
    // {
    //   test: /\.(eot|ttf|woff|woff2)$/,
    //   loader: 'url-loader',
    //   options: {
    //     limit: 1,
    //     name: 'public/fonts/[name].[hash:8].[ext]',
    //   },
    // },
    // {
    //   test: /\.svg/,
    //   loader: 'url-loader',
    //   options: {
    //     limit: 26000,
    //     mimetype: 'image/svg+xml',
    //   },
    // },
    // {
    //   test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    //   loader: 'file-loader',
    //   options: {
    //     limit: 10000,
    //     name: 'public/img/[name].[hash:8].[ext]',
    //   },
    // },
    // ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  mode: 'development',
};

