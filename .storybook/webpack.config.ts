import variables from '../src/variables';

const _config = ({ config, mode }: any) => {
  // Extend config as you need.
  config.module.rules.push({
    loader: 'babel-loader',
    exclude: /node_modules/,
    test: /\.js$/,
    options: {
      presets: ['@babel/react'],
      plugins: [
        ['import', { libraryName: 'antd', style: true }],
        ['transform-class-properties', { spec: true }],
      ],
    },
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
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
