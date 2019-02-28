const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const theme = require('./src/variables.js');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    }),
);