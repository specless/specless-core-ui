import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs';
import { number } from '@storybook/addon-knobs';
import Icon from './';
import Padding from '../padding';
import Text from '../text';
import Card from '../card';
import StorybookUI from '../../utils/storybook-ui';
import variables from '../../variables';

import _ from 'lodash/fp';

const icons: Record<string, string> = {};
const colors = {
  inherit: 'inherit',
  base: 'base',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  error: 'error',
  normal: 'normal',
  light: 'light',
  dark: 'dark',
};

const themes = {
  outlined: 'outlined',
  filled: 'filled',
  twoTone: 'twoTone',
};

const sizes = {
  inherit: 'inherit',
  xsmall: 'xsmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge',
  xxlarge: 'xxlarge',
  huge: 'huge',
};

_.forEach((icon: string) => {
  icons[icon] = icon;
}, variables.icons);

storiesOf('General/Icon', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Single', () => (
    <Icon
      type={select('type', icons, 'setting')}
      color={select('color', colors, 'inherit')}
      theme={select('theme', themes, 'outlined') as any}
      size={select('size', sizes, 'inherit')}
      spin={boolean('spin', false)}
      rotate={number(
        'rotate',
        null as any,
        {
          range: true,
          min: 0,
          max: 360,
        } as any,
      )}
    />
  ))
  .add('Reference (All Icons)', () => (
    <div>
      {_.map((item: string) => {
        return (
          <Padding size='lg' display='inline-block'>
            <Card style={{ textAlign: 'center' }}>
              <Padding direction='bottom'>
                <Icon
                  type={item}
                  color={select('color', colors, 'inherit')}
                  theme={select('theme', themes, 'outlined') as any}
                  size={select('size', sizes, 'huge')}
                  spin={boolean('spin', false)}
                  rotate={number(
                    'rotate',
                    null as any,
                    {
                      range: true,
                      min: 0,
                      max: 360,
                    } as any,
                  )}
                />
              </Padding>
              <Text>
                <code>{item}</code>
              </Text>
            </Card>
          </Padding>
        );
      }, variables.icons)}
    </div>
  ));
