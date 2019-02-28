import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { text } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import StorybookUI from '../components/StorybookUI';
const variables = require('../variables.js');

const icons = {}

const types = {
    primary: 'primary',
    dashed: 'dashed',
    danger: 'danger',
    default: 'default'
}

const sizes = {
    default: null,
    small: 'small',
    large: 'large'
}

const themes = {
    default: null,
    alt: 'alt',
    label: 'label'
}

const htmlTypes = {
    button: 'button',
    submit: 'submit',
    reset: 'reset'
}

const shapes = {
    default: null,
    circle: 'circle',
    round: 'round'
}

const shadows = {
    none: null,
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
}

variables.icons.forEach(function(icon) {
    icons[icon] = icon;
});

icons.none = null

storiesOf('General', module)
    .addDecorator(story => <StorybookUI>{story()}</StorybookUI>)
    .add('Button', () => (
        <Button 
            type={select('type', types, 'default')}
            size={select('size', sizes, null)}
            theme={select('theme', themes, null)}
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            ghost={boolean('ghost', false)}
            block={boolean('block', false)}
            icon={select('icon', icons, null)}
            htmlType={select('htmlType', htmlTypes, 'button')}
            shape={select('shape', shapes, null)}
            shadow={select('shadow', shadows, null)}
            onClick={action('"onClick" event triggered')}
            href={text('href', undefined)}
            target={text('target', undefined)}
        >
            {text('text', 'Button')}
        </Button>
    )
);