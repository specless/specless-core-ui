import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { object } from '@storybook/addon-knobs';
import { LinkProps, MemoryRouter } from 'react-router-dom';
import { INavItemProps } from '../nav-item/nav-item';
import NavGroup, { INavGroupProps } from './nav-group';
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

type IProps = INavItemProps & LinkProps & Pick<INavGroupProps, 'size' | 'type'>;
const navItems = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    state: 'active',
    to: '/dashboard',
    onClick: action('onClick (Dashboard)'),
  },
  {
    title: 'Browse',
    icon: 'eye',
    to: '/browse',
    onClick: action('onClick (Browse)'),
  },
  {
    title: 'Ad Products',
    icon: 'shop',
    to: '/ad-products',
    onClick: action('onClick (Ad Products)'),
  },
  {
    title: 'Reporting',
    icon: 'bar-chart',
    to: '/reporting',
    onClick: action('onClick (Reporting)'),
    state: 'disabled',
  },
] as IProps[];

storiesOf('Navigation', module)
  .addDecorator((story) => (
    <StorybookUI type='resizable'>
      <MemoryRouter>{story()}</MemoryRouter>
    </StorybookUI>
  ))
  .add('NavGroup', () => (
    <NavGroup
      type={select('type', types, 'menu')}
      size={select('size', sizes, 'base')}
      navItems={object('navItems', navItems)}
    />
  ));
