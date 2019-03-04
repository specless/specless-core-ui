import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { object } from '@storybook/addon-knobs';
import NavGroup from '../components/NavGroup';
import StorybookUI from '../components/StorybookUI';

const types = {
    menu: 'menu',
    tab: 'tab'
}

const sizes = {
    base: 'base',
    small: 'small'
}

const navItems = [
    {
        content: 'Dashboard',
        icon: 'dashboard',
        state: 'active',
        onClick: action('onClick (Dashboard)')
    },
    {
        content: 'Browse',
        icon: 'eye',
        onClick: action('onClick (Browse)')
    },
    {
        content: 'Ad Products',
        icon: 'shop',
        onClick: action('onClick (Ad Products)')
    },
    {
        content: 'Reporting',
        icon: 'bar-chart',
        onClick: action('onClick (Reporting)'),
        state: 'disabled'
    }
]

storiesOf('Navigation', module)
    .addDecorator(story => <StorybookUI type="resizable">{story()}</StorybookUI>)
    .add('NavGroup', () => (
        <NavGroup 
            type={select('type', types, 'menu')} 
            size={select('size', sizes, 'base')}
            navItems={object('navItems', navItems)}
        />
    )
);