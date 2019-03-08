/** @jsx jsx */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { css, jsx } from '@emotion/core';
import { Card } from 'antd';
import StorybookUI from '../../utils/storybook-ui';
import Padding from '../padding/padding';
import Container from './container';

const exampleBreakpoints = [{ max: 500 }, { max: 900 }, { min: 900 }];

const exampleStyles = css`
  display: inline-block;
  float: left;

  [data-max~='900'] & {
    width: 50%;
  }

  [data-min~='900'] & {
    width: 25%;
  }

  [data-max~='500'] & {
    width: 100%;
  }
`;

storiesOf('Layout', module)
  .addDecorator((story) => (
    <StorybookUI type='resizable'>{story()}</StorybookUI>
  ))
  .add('Container', () => (
    <Container
      breakpoints={object('breakpoints', exampleBreakpoints)}
      noMaxWidth={boolean('noMaxWidth', false)}
      onBreakpointChange={action('Active breakpoints changed.')}>
      <Card title='This element is inside the container'>
        <div css={exampleStyles}>
          <Padding>
            <Card title='Content' className='shadow-elevation-3'>
              Here is some content.
            </Card>
          </Padding>
        </div>

        <div css={exampleStyles}>
          <Padding>
            <Card title='Content' className='shadow-elevation-3'>
              Here is some content.
            </Card>
          </Padding>
        </div>

        <div css={exampleStyles}>
          <Padding>
            <Card title='Content' className='shadow-elevation-3'>
              Here is some content.
            </Card>
          </Padding>
        </div>

        <div css={exampleStyles}>
          <Padding>
            <Card title='Content' className='shadow-elevation-3'>
              Here is some content.
            </Card>
          </Padding>
        </div>
      </Card>
    </Container>
  ));
