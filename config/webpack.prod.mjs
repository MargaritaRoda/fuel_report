import { merge } from 'webpack-merge';
import { config } from './webpack.common.js';

export const webpackProd = merge(config, {
  mode: 'production',
  devtool: 'source-map',
});
