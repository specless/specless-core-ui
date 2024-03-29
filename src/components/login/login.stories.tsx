import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import StorybookUI from '../../utils/storybook-ui';
import Login from './';

storiesOf('Login Form', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Base', () => (
    <Login
      onGoogleLogin={action('onGoogleLogin')}
      onPasswordLogin={action('onPasswordLogin')}
      toggleShowResetPasswordEmail={action('toggleShowResetPasswordEmail')}
    />
  ));
