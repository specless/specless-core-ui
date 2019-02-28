import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs';
import { number } from '@storybook/addon-knobs';
import Icon from '../components/Icon';
import Padding from '../components/Padding';
import Text from '../components/Text';
import { Card } from 'antd';
import StorybookUI from '../components/StorybookUI';
const variables = require('../variables.js');

const icons = {}
const colors = {
    inherit: 'inherit',
    base: 'base',
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    error: 'error',
    normal: 'normal',
    light: 'light',
    dark: 'dark'
}

const themes = {
    outlined: 'outlined',
    filled: 'filled',
    twoTone: 'twoTone'
}

const sizes = {
    inherit: 'inherit',
    xsmall: 'xsmall',
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
    xxlarge: 'xxlarge',
    huge: 'huge' 
}

variables.icons.forEach(function(icon) {
      icons[icon] = icon;
});

storiesOf('General', module)
    .addDecorator(story => <StorybookUI>{story()}</StorybookUI>)
    .add('Icon', () => (
        <Icon 
            type={select('type', icons, 'setting')}
            color={select('color', colors, 'inherit')}
            theme={select('theme', themes, 'outlined')}
            size={select('size', sizes, 'inherit')}
            spin={boolean('spin', false)}
            rotate={number('rotate', null, {
                range: true,
                min: 0,
                max: 360
             })}
        />
    )
);

storiesOf('General', module)
    .addDecorator(story => <StorybookUI>{story()}</StorybookUI>)
    .add('Icons (All)', () => (
        <div>
            {
                variables.icons.map(function(item){
                    return (
                        <Padding size="lg" display="inline-block">
                            <Card style={{textAlign: 'center'}}>
                                <Padding direction="bottom">
                                    <Icon
                                        type={item}
                                        color={select('color', colors, 'inherit')}
                                        theme={select('theme', themes, 'outlined')}
                                        size={select('size', sizes, 'huge')}
                                        spin={boolean('spin', false)}
                                        rotate={number('rotate', null, {
                                            range: true,
                                            min: 0,
                                            max: 360
                                        })}
                                    />
                                </Padding>
                                <Text>
                                    <code>{item}</code>
                                </Text>
                            </Card>
                        </Padding>
                    )
                })
            }
        </div>
    )
);


