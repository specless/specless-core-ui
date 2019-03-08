import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Layout, { ILayoutProps } from './layout';
import Button from '../button/button';
import Alert from '../alert/alert';
import StorybookUI from '../../utils/storybook-ui';
// import NavGroup from '../components/NavGroup';
// import OrgPicker from '../components/OrgPicker';

const siderStates = {
  normal: 'normal',
  collapsed: 'collapsed',
  expanded: 'expanded',
  'expanded-wide': 'expanded-wide',
};

const navItems = [
  {
    content: 'Dashboard',
    icon: 'dashboard',
    state: 'active',
    onClick: function() {},
  },
  {
    content: 'Browse',
    icon: 'eye',
    onClick: function() {},
  },
  {
    content: 'Ad Products',
    icon: 'shop',
    onClick: function() {},
  },
  {
    content: 'Reporting',
    icon: 'bar-chart',
    onClick: function() {},
  },
];

let organizations = [
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

storiesOf('Layout', module)
  .addDecorator((story) => <StorybookUI type='viewport'>{story()}</StorybookUI>)
  .add('Layout', () => (
    <div
      style={{
        height: 'calc(100vh)',
        width: 'calc(100vw)',
        minWidth: 300,
      }}>
      <Layout
        isLoading={boolean('isLoading', false)}
        siderState={select('siderState', siderStates, 'normal' as any)}
        siderHiddenMobile={boolean('siderHiddenMobile', true)}
        forceRefreshOnPropChange={true}>
        <Layout.Sider>
          <Layout.Nav />
          <Layout.SubNav />
        </Layout.Sider>
        <Layout.Main>
          <Layout.Bar />
          <Layout.Message />
          <Layout.Content />
        </Layout.Main>
      </Layout>
    </div>
  ));

/*storiesOf('Layout', module)
  .addDecorator((story) => <StorybookUI type='viewport'>{story()}</StorybookUI>)
  .add('Layout (With Content)', () => (
    <div
      style={{
        height: 'calc(100vh)',
        width: 'calc(100vw)',
        minWidth: 300,
      }}>
      <Layout
        isLoading={boolean('isLoading', false)}
        siderState={select('siderState', siderStates, 'normal')}
        siderHiddenMobile={boolean('siderHiddenMobile', true)}
        onBreakpointChange={action('onBreakpointChange')}>
        <Layout.Message>
          <Alert
            message='Example Message'
            description='Additional description and information goes here.'
            type='info'
            showIcon
            closable
          />
        </Layout.Message>

        <Layout.Nav>
          {/!*<OrgPicker organizations={organizations} />*!/}
          {/!*<NavGroup type='menu' navItems={navItems} />*!/}
        </Layout.Nav>

        <Layout.Content />
      </Layout>
    </div>
  ));*/
