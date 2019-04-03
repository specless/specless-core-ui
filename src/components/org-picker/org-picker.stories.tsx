import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import OrgPicker from './';
import StorybookUI from '../../utils/storybook-ui';

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

storiesOf('Navigation', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('OrgPicker', () => (
    <OrgPicker
      onSettingsClick={action('onSettingsClick')}
      organizations={object('organizations', organizations)}
    />
  ));
