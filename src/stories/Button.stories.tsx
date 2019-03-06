import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { addDecorator, storiesOf } from '@storybook/react';

import _ from 'lodash/fp';
import React from 'react';
import Button from '../components/Button';
import StorybookUI from '../components/StorybookUI';

const variables = require('../variables');

const icons: Record<string, string | null> = {};

const types = {
  primary: 'primary',
  dashed: 'dashed',
  danger: 'danger',
  default: 'default',
};

const sizes = {
  default: null,
  small: 'small',
  large: 'large',
};

const themes = {
  default: null,
  alt: 'alt',
  label: 'label',
};

const htmlTypes = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

const shapes = {
  default: null,
  circle: 'circle',
  round: 'round',
};

const shadows = {
  none: null,
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
};

_.forEach((icon: string) => {
  icons[icon] = icon;
}, variables.icons);

(icons as any).none = null;

storiesOf('General', module)
  .addDecorator((story: any) => <StorybookUI>{story()}</StorybookUI>)
  .add('Button', () => (
      <Button
        type={select('type', types, 'default') as any}
        size={select('size', sizes as any, null as any)}
        theme={select('theme', themes as any, null as any)}
        disabled={boolean('disabled', false)}
        loading={boolean('loading', false)}
        ghost={boolean('ghost', false)}
        block={boolean('block', false)}
        icon={select('icon', icons as any, null as any)}
        htmlType={select('htmlType', htmlTypes, 'button')}
        shape={select('shape', shapes as any, null as any)}
        shadow={select('shadow', shadows as any, null as any)}
        onClick={action('"onClick" event triggered')}
        href={text('href', undefined as any)}
      >
        {text('text', 'Button')}
      </Button>
    ),
  );