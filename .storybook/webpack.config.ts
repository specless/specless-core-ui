import variables from '../src/variables';

module.exports = (baseConfig: any, env: any, defaultConfig: any) => {
  // Extend defaultConfig as you need.
  /*defaultConfig.module.rules.push({
    loader: 'babel-loader',
    exclude: /node_modules/,
    test: /\.js$/,
    options: {
      presets: ['@babel/react'],
      plugins: [
        ['import', { libraryName: 'antd', style: true }],
        ['transform-class-properties', { 'spec': true }],
      ],
    },
  });*/
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  });

  defaultConfig.module.rules.push({
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

  defaultConfig.resolve.extensions.push('.ts', '.tsx');
  return defaultConfig;
};