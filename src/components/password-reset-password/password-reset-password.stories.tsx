import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import StorybookUI from '../../utils/storybook-ui';
import PasswordResetPassword from './';

storiesOf('PasswordResetPassword Form', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Base', () => (
    <PasswordResetPassword
      onPasswordResetPassword={action('onPasswordResetPassword')}
      passwordResetToken='token'
    />
  ));
