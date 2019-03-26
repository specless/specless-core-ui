import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NavItem from './nav-item';
import StorybookUI from '../../utils/storybook-ui';
import variables from '../../variables';

import _ from 'lodash/fp';

const types = {
  menu: 'menu',
  tab: 'tab',
  tile: 'tile',
} as { [key: string]: 'menu' | 'tab' | 'tile' };

const sizes = {
  base: 'base',
  small: 'small',
} as { [key: string]: 'base' | 'small' };

const states = {
  normal: 'normal',
  active: 'active',
  disabled: 'disabled',
} as { [key: string]: 'normal' | 'active' | 'disabled' };

const icons: { [key: string]: string } = {};

_.forEach((icon: string) => {
  icons[icon] = icon;
}, variables.icons);

storiesOf('Navigation', module)
  .addDecorator((story) => (
    <StorybookUI>{story()}</StorybookUI>
  ))
  .add('NavItem', () => (
    <NavItem
      type={select('type', types, 'menu')}
      title={text('text', 'Homepage')}
      size={select('size', sizes, 'base')}
      state={select('state', states, 'normal')}
      href={text('href', 'https://gospecless.com')}
      icon={select('icon', icons, 'home')}
      onClick={action('onClick')}
    />
  ));
