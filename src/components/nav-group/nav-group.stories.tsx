import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { object } from '@storybook/addon-knobs';
import { INavItemProps } from '../nav-item';
import NavGroup, { INavGroupProps } from './';
import StorybookUI from '../../utils/storybook-ui';

const types = {
  menu: 'menu',
  tab: 'tab',
  tile: 'tile',
} as { [key: string]: 'menu' | 'tab' | 'tile' };

const sizes = {
  base: 'base',
  small: 'small',
} as { [key: string]: 'base' | 'small' };

type IProps = INavItemProps & Pick<INavGroupProps, 'size' | 'type'>;
const navItems = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    state: 'active',
    href: '/dashboard',
    onClick: (event) => event.preventDefault(),
  },
  {
    title: 'Browse',
    icon: 'eye',
    href: '/browse',
    onClick: (event) => event.preventDefault(),
  },
  {
    title: 'Ad Products',
    icon: 'shop',
    href: '/ad-products',
    onClick: (event) => event.preventDefault(),
  },
  {
    title: 'Reporting',
    icon: 'bar-chart',
    href: '/reporting',
    onClick: (event) => event.preventDefault(),
    state: 'disabled',
  },
] as IProps[];

storiesOf('Navigation', module)
  .addDecorator((story) => (
    <StorybookUI type='resizable'>{story()}</StorybookUI>
  ))
  .add('NavGroup', () => (
    <NavGroup
      type={select('type', types, 'menu')}
      size={select('size', sizes, 'base')}
      navItems={object('navItems', navItems)}
    />
  ));
