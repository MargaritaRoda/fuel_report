import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import {fileURLToPath} from "node:url";
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const PUBLIC_URL = '';
const IS_DEV = process.env.NODE_ENV !== 'production';

export const config = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    clean: true,
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js', //[name].[hash].js
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    publicPath: '/fuel_report/',
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
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
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

// module.exports = {
//   config,
//   PUBLIC_URL,
// };
