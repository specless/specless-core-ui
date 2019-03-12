import CustomizaCRA = require('customize-cra');
import Theme from './src/variables';

const _overrides = CustomizaCRA.override(
  CustomizaCRA.fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  CustomizaCRA.addLessLoader({
    javascriptEnabled: true,
    modifyVars: Theme,
  })
);
module.exports = _overrides;
