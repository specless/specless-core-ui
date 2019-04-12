import { storiesOf } from '@storybook/react';
import StorybookUI from '../../utils/storybook-ui';
import React from 'react';
import Login from './login';

storiesOf('Login Form', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Base', () => (
    <Login/>
  ));