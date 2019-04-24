import { storiesOf } from '@storybook/react';
import StorybookUI from '../../utils/storybook-ui';
import React from 'react';
import Login from './index';
import { action } from '@storybook/addon-actions';

storiesOf('Login Form', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Base', () => (
    <Login
      onGoogleLogin={action('onGoogleLogin')}
      onPasswordLogin={action('onPasswordLogin')}
    />
  ));