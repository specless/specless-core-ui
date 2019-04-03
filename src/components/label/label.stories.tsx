import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Label from './';
import StorybookUI from '../../utils/storybook-ui';

storiesOf('Typography', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Label', () => (
    <Label>{text('text', 'The Quick Brown Fox Jumps Over the Lazy Dog')}</Label>
  ));
