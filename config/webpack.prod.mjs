import { merge } from 'webpack-merge';
import { config } from './webpack.common.mjs';

export const webpackProd = merge(config, {
  mode: 'production',
  devtool: 'source-map',
});
export default webpackProd;