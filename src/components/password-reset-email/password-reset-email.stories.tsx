import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import StorybookUI from '../../utils/storybook-ui';
import PasswordResetEmail from './';

storiesOf('PasswordResetEmail Form', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Base', () => (
    <PasswordResetEmail
      onPasswordResetEmail={action('onPasswordResetEmail')}
      toggleShowResetPasswordEmail={action('toggleShowResetPasswordEmail')}
    />
  ));
