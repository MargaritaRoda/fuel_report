const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const PUBLIC_URL = '';
const IS_DEV = process.env.NODE_ENV !== 'production';

const config = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    clean: true,
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: IS_DEV
                  ? '[path][name]__[local]--[hash:base64:5]'
                  : '[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /module\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, '../public/index.html'),
      templateParameters: {
        PUBLIC_URL,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[fullhash].css',
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL),
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, '../public'),
    //       to: PUBLIC_URL.slice(1),
    //       globOptions: {
    //         ignore: [path.resolve(__dirname, '../public', 'index.html')],
    //       },
    //     },
    //   ],
    // }),
  ],
};

module.exports = {
  config,
  PUBLIC_URL,
};
