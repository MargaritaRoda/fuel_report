import { merge } from 'webpack-merge';
import { config, PUBLIC_URL } from './webpack.common.mjs';
import path from 'path';
import {fileURLToPath} from "node:url";
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const webpackDev = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
      publicPath: PUBLIC_URL + '/',
    },
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
});
export default webpackDev;