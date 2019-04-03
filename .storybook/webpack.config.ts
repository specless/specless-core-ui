import variables from '../src/variables';
import path from 'path';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const _config = ({ config, mode }: any) => {
  const _isProd = mode === 'PRODUCTION';
  const _configFile = _isProd
    ? path.resolve(__dirname, '../tsconfig.prod.json')
    : path.resolve(__dirname, '../tsconfig.json');

  // Extend config as you need.
  /*config.entry.push(
    path.resolve(__dirname, '../node_modules/antd/dist/antd.less')
  );*/
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: 'ts-loader',
        options: {
          configFile: _configFile,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.less$/,
    loaders: [
      /*_isProd ? MiniCssExtractPlugin.loader : */'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          modifyVars: variables,
          javascriptEnabled: true,
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  /*config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: _isProd
        ? 'specless-core-ui.[hash].css'
        : 'specless-core-ui.css',
      chunkFilename: _isProd ? '[id].[hash].css' : '[id].css',
    })
  );

  config.optimization.splitChunks = {
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      },
    },
  };*/

  return config;
};

export default _config;
