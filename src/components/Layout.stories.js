import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Alert from '../components/Alert';
import StorybookUI from '../components/StorybookUI';

const siderStates = {
    normal: 'normal',
    collapsed: 'collapsed',
    expanded: 'expanded',
    'expanded-wide': 'expanded-wide'
}

class Toggle extends React.Component {
    static contextType = Layout.Api;

    render() {
        console.log(this.context)
        return (
            <Button onClick={this.context.toggleMobileSider}>Toggle</Button>
        )
    }
}

storiesOf('Layout', module)
    .addDecorator(story => <StorybookUI type="viewport">{story()}</StorybookUI>)
    .add('Layout', () => (
        <div style={{width: '100%', height: 'calc(100vh)', width: 'calc(100vw)', minWidth: 300}}>
            <Layout
                isLoading={boolean('isLoading', false)}
                siderState={select('siderState', siderStates, 'normal')}
                siderHiddenMobile={boolean('siderHiddenMobile', true)}
            >
            </Layout>
        </div>
    )
);

storiesOf('Layout', module)
    .addDecorator(story => <StorybookUI type="viewport">{story()}</StorybookUI>)
    .add('Layout (With Message)', () => (
        <div style={{width: '100%', height: 'calc(100vh)', width: 'calc(100vw)', minWidth: 300}}>
            <Layout
                isLoading={boolean('isLoading', false)}
                siderState={select('siderState', siderStates, 'normal')}
                siderHiddenMobile={boolean('siderHiddenMobile', true)}
            >
                <Layout.Message>
                    <Alert
                        message="Example Message"
                        description="Additional description and information goes here."
                        type="info"
                        showIcon
                        closable
                    />
                </Layout.Message>
            </Layout>
        </div>
    )
);