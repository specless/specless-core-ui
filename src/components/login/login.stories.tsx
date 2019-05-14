import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Login from '.';
import StorybookUI from '../../utils/storybook-ui';

storiesOf('Login Form', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Base', () => (
    <Login
      onGoogleLogin={action('onGoogleLogin')}
      onPasswordLogin={action('onPasswordLogin')}
      onForgotPassword={action('onForgotPassword')}
    />
  ));
