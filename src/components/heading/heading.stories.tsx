import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { text } from '@storybook/addon-knobs';
import Heading from './heading';
import StorybookUI from '../../utils/storybook-ui';

storiesOf('Typography', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Heading', () => (
    <Heading
      level={number('level', 1, {
        range: true,
        min: 1,
        max: 6,
        step: 1,
      })}>
      {text('text', 'The Quick Brown Fox Jumps Over the Lazy Dog')}
    </Heading>
  ));
