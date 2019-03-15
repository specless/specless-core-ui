const path = require('path');
module.exports = {
  preset: 'ts-jest',
  rootDir: path.resolve(__dirname, '..'),
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
