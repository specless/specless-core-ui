import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Label from '../components/Label';
import StorybookUI from '../components/StorybookUI';


storiesOf('Typography', module)
    .addDecorator(story => <StorybookUI>{story()}</StorybookUI>)
    .add('Label', () => (
        <Label>
            {text('text', 'The Quick Brown Fox Jumps Over the Lazy Dog')}
        </Label>
    )
);