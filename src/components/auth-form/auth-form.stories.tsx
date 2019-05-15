import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import StorybookUI from '../../utils/storybook-ui';
import AuthForm from './';

storiesOf('Auth Form', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Login View', () => (
    <AuthForm
      onGoogleLogin={action('onGoogleLogin')}
      onPasswordLogin={action('onPasswordLogin')}
      onPasswordResetEmail={action('onPasswordResetEmail')}
      onPasswordResetPassword={action('onPasswordResetPassword')}
    />
  ))
  .add('Email Reset View', () => (
    <AuthForm
      onGoogleLogin={action('onGoogleLogin')}
      onPasswordLogin={action('onPasswordLogin')}
      onPasswordResetEmail={action('onPasswordResetEmail')}
      onPasswordResetPassword={action('onPasswordResetPassword')}
      defaultShowPasswordEmail={true}
    />
  ))
  .add('Password Reset View', () => (
    <AuthForm
      onGoogleLogin={action('onGoogleLogin')}
      onPasswordLogin={action('onPasswordLogin')}
      onPasswordResetEmail={action('onPasswordResetEmail')}
      onPasswordResetPassword={action('onPasswordResetPassword')}
      passwordResetToken='token'
    />
  ))
