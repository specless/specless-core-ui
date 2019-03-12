import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { LinkProps } from 'react-router-dom';
import NavGroup, { INavGroupProps } from '../nav-group/nav-group';
import { INavItemProps } from '../nav-item/nav-item';
import OrgPicker from '../org-picker/org-picker';
import Layout from './layout';
import Alert from '../alert/alert';
import StorybookUI from '../../utils/storybook-ui';
import { ISiderState } from './layout-api';
import LayoutWrapper from './layout-wrapper';
import { MemoryRouter } from 'react-router';

const siderStates = {
  normal: 'normal',
  collapsed: 'collapsed',
  expanded: 'expanded',
  'expanded-wide': 'expanded-wide',
} as { [key: string]: ISiderState };

type IProps = INavItemProps & LinkProps & Pick<INavGroupProps, 'size' | 'type'>;
const navItems = [
  {
    children: 'Dashboard',
    icon: 'dashboard',
    state: 'active',
    to: '/dashboard',
    onClick: action('onClick (Dashboard)'),
  },
  {
    children: 'Browse',
    icon: 'eye',
    to: '/browse',
    onClick: action('onClick (Browse)'),
  },
  {
    children: 'Ad Products',
    icon: 'shop',
    to: '/ad-products',
    onClick: action('onClick (Ad Products)'),
  },
  {
    children: 'Reporting',
    icon: 'bar-chart',
    to: '/reporting',
    onClick: action('onClick (Reporting)'),
    state: 'disabled',
  },
] as IProps[];

const organizations = [
  {
    name: 'NBC Universal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/NBC_logo.svg',
    isCurrent: true,
    onClick: action('onClick'),
  },
  {
    name: 'Dotdash',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Dotdash_logo.png',
    isCurrent: false,
    onClick: action('onClick'),
  },
  {
    name: 'Fusion Media Group',
    logo:
      'https://pbs.twimg.com/profile_images/736209330534526977/HoA165an_400x400.jpg',
    isCurrent: false,
    onClick: action('onClick'),
  },
  {
    name: 'Ziff Davis',
    logo:
      'https://pbs.twimg.com/profile_images/692109861551751178/aLLlRLwq_400x400.png',
    isCurrent: false,
    onClick: action('onClick'),
  },
];

const breakpoints = [{ max: 480 }, { max: 1100 }, { min: 1100 }];

storiesOf('General/Layout', module)
  .addDecorator((story) => (
    <StorybookUI type='viewport'>
      <MemoryRouter>{story()}</MemoryRouter>
    </StorybookUI>
  ))
  .add('Base', () => (
    <div
      style={{
        height: 'calc(100vh)',
        width: 'calc(100vw)',
        minWidth: 300,
      }}>
      <LayoutWrapper
        isLoading={boolean('isLoading', false)}
        siderState={select<ISiderState>('siderState', siderStates, 'normal')}
        siderHiddenMobile={boolean('siderHiddenMobile', true)}
        onBreakpointChange={[action('onBreakpointChange')]}
        breakpoints={breakpoints}>
        <Layout.Sider>
          <Layout.Nav />
          <Layout.SubNav />
        </Layout.Sider>
        <Layout.Main>
          <Layout.Bar />
          <Layout.Message />
          <Layout.Content />
        </Layout.Main>
      </LayoutWrapper>
    </div>
  ))
  .add('With Content', () => (
    <div
      style={{
        height: 'calc(100vh)',
        width: 'calc(100vw)',
        minWidth: 300,
      }}>
      <LayoutWrapper
        isLoading={boolean('isLoading', false)}
        siderState={select('siderState', siderStates, 'normal')}
        siderHiddenMobile={boolean('siderHiddenMobile', true)}
        onBreakpointChange={[action('onBreakpointChange')]}
        breakpoints={breakpoints}>
        <Layout.Sider>
          <Layout.Nav>
            <OrgPicker organizations={organizations} />
            <NavGroup type='menu' navItems={navItems} />
          </Layout.Nav>
        </Layout.Sider>
        <Layout.Main>
          <Layout.Bar />
          <Layout.Message>
            <Alert
              message='Example Message'
              description='Additional description and information goes here.'
              type='info'
              showIcon
              closable
            />
          </Layout.Message>
          <Layout.Content />
        </Layout.Main>
      </LayoutWrapper>
    </div>
  ));
