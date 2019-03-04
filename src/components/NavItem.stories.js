import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NavItem from '../components/NavItem';
import StorybookUI from '../components/StorybookUI';
const variables = require('../variables.js');

const types = {
    menu: 'menu',
    tab: 'tab',
    tile: 'tile'
}

const sizes = {
    base: 'base',
    small: 'small'
}

const states = {
    normal: 'normal',
    active: 'active',
    disabled: 'disabled'
}

const icons = {}

variables.icons.forEach(function(icon) {
    icons[icon] = icon;
});

storiesOf('Navigation', module)
    .addDecorator(story => <StorybookUI>{story()}</StorybookUI>)
    .add('NavItem', () => (
        <NavItem 
            type={select('type', types, 'menu')} 
            size={select('size', sizes, 'base')}
            state={select('state', states, 'normal')}
            icon={select('icon', icons, 'home')}
            onClick={action('onClick')}
        >
            {text('text', 'Homepage')}
        </NavItem>
    )
);