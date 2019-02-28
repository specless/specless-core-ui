import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { text } from '@storybook/addon-knobs';
import Heading from '../components/Heading';
import StorybookUI from '../components/StorybookUI';


storiesOf('Typography', module)
    .addDecorator(story => <StorybookUI>{story()}</StorybookUI>)
    .add('Heading', () => (
        <Heading
            level={number('level', 1, {
                range: true,
                min: 1,
                max: 6,
                step: 1
            })}
        >
            {text('text', 'The Quick Brown Fox Jumps Over the Lazy Dog')}
        </Heading>
    )
);