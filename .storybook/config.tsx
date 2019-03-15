import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../src/components/theme/theme';

// @ts-ignore
import _ from 'lodash/fp';

// Shim require.context for Jest testing
if (typeof require.context === 'undefined') {
  const fs = require('fs');
  const path = require('path');

  (require as any).context = (
    base = '.',
    scanSubDirectories = false,
    regularExpression = /\.js$/
  ) => {
    const files = {} as any;

    function readDirectory(directory: any) {
      fs.readdirSync(directory).forEach((file: any) => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file: any) {
      return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
}

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  _.forEach((fileName: string) => req(fileName), req.keys());
}

addDecorator(withKnobs);

addDecorator((story) => <Theme>{story()}</Theme>);

configure(loadStories, module);
