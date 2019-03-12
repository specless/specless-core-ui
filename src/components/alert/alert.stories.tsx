import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import _ from 'lodash/fp';
import React from 'react';
import Alert from './alert';
import StorybookUI from '../../utils/storybook-ui';

const variables = require('../../variables');

const icons: Record<string, string | null> = {};

const types = ['success', 'info', 'warning', 'error'];

_.forEach((icon: string) => {
  icons[icon] = icon;
}, variables.icons);

(icons as any).none = null;

storiesOf('General', module)
  .addDecorator((story: any) => <StorybookUI>{story()}</StorybookUI>)
  .add('Alert', () => (
    <Alert
      message={text('text', 'Alert Message')}
      type={select('type', types, 'info') as any}
      closable={boolean('closable', false)}
      closeText={text('closeText', 'Close')}
      description={text('description', 'Description of alert')}
      showIcon={boolean('showIcon', false)}
      banner={boolean('banner', false)}
    />
  ));
