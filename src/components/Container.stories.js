import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Container from '../components/Container';
import Button from '../components/Button';
import Padding from '../components/Padding';
import { css } from 'emotion/macro';
import { Card } from 'antd';
import StorybookUI from '../components/StorybookUI';

const exampleBreakpoints = [
    {max: 500},
    {max: 900},
    {min: 900}
]

const exampleStyles = css`
    display: inline-block;
    float: left;
    
    [data-max~="900"] & {
        width: 50%;
    }

    [data-min~="900"] & {
        width: 25%;
    }

    [data-max~="500"] & {
        width: 100%;
    }
`


storiesOf('Layout', module)
    .addDecorator(story => <StorybookUI type="resizable">{story()}</StorybookUI>)
    .add('Container', () => (
        <Container
            breakpoints={object('breakpoints', exampleBreakpoints)}
            noMaxWidth={boolean('noMaxWidth', false)}
            onBreakpointChange={action('Active breakpoints changed.')}
        >
            <Card title="This element is inside the container">
                <div className={exampleStyles}>
                    <Padding>
                        <Card title="Content" className="shadow-elevation-3">
                            Here is some content.
                        </Card>
                    </Padding>
                </div>

                <div className={exampleStyles}>
                    <Padding>
                        <Card title="Content" className="shadow-elevation-3">
                            Here is some content.
                        </Card>
                    </Padding>
                </div>

                <div className={exampleStyles}>
                    <Padding>
                        <Card title="Content" className="shadow-elevation-3">
                            Here is some content.
                        </Card>
                    </Padding>
                </div>

                <div className={exampleStyles}>
                    <Padding>
                        <Card title="Content" className="shadow-elevation-3">
                            Here is some content.
                        </Card>
                    </Padding>
                </div>

            </Card>
        </Container>
    )
);