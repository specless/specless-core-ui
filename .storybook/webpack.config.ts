import variables from '../src/variables';
import path from 'path';

const _config = ({ config, mode }: any) => {
  const _isProd = mode === 'PRODUCTION';
  const _configFile = _isProd
    ? path.resolve(__dirname, '../tsconfig.prod.json')
    : path.resolve(__dirname, '../tsconfig.json');

  // Extend config as you need.
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
      'style-loader',
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
  return config;
};

export default _config;
