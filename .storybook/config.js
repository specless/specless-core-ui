import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../src/components/Theme';
import Padding from '../src/components/Padding';
import { Card } from 'antd';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

addDecorator(story => <Theme>{story()}</Theme>)

configure(loadStories, module);
