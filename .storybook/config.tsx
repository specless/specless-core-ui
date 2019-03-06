import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../src/components/theme/theme';

import _ from 'lodash/fp';

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  _.forEach((fileName: string) => req(fileName), req.keys());
}

addDecorator(withKnobs);

addDecorator((story) => <Theme>{story()}</Theme>);

configure(loadStories, module);
