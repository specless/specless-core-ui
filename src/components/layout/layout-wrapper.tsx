/** @jsx jsx */
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import { Spin } from 'antd';
import React, { useContext } from 'react';
import { IBreakpoint, IBreakpointsContainer } from '../../models/breakpoint';
import Container from '../container/container';
import { ThemeContext } from '../theme/theme';
import _ from 'lodash/fp';
import { ILayoutProps } from './layout';
import { ILayoutBreakpointCallBack, LayoutContext } from './layout-api';

export interface ILayoutWrapperProps extends ILayoutProps {
  breakpoints: IBreakpoint[];
  onBreakpointChange: ILayoutBreakpointCallBack[];
}

const LayoutWrapper: React.FunctionComponent<ILayoutWrapperProps> = (props) => {
  const _themeContext = useContext(ThemeContext);
  const _theme = _themeContext.get;

  const _layoutContext = useContext(LayoutContext);

  const handleBreakpointChanges = (breakpoints: IBreakpointsContainer) => {
    const {} = props;
    let hasMobile = false;
    let hasTablet = false;
    let hasDesktop = false;

    _.forEach((breakpoint: number) => {
      if (breakpoint === 1100) {
        hasTablet = true;
      }

      if (breakpoint === 480) {
        hasMobile = true;
      }
    }, breakpoints.max);

    _.forEach((breakpoint: number) => {
      if (breakpoint === 1100) {
        hasDesktop = true;
      }
    }, breakpoints.min);

    if (hasDesktop) {
      _layoutContext.setCurrentSize('desktop');
    } else if (hasTablet && hasMobile) {
      _layoutContext.setCurrentSize('mobile');
    } else if (hasTablet) {
      _layoutContext.setCurrentSize('tablet');
    }

    _.forEach((callback) => {
      callback(breakpoints);
    }, props.onBreakpointChange);
  };

  const _containerCSS = css`
    background-color: ${_theme('light-gray')};
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    min-width: 300px;
    display: flex;
    flex-direction: column;
  `;

  const _layoutCSS = css`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-grow: 1;

    .LayoutLoadingSpinner {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.3s ease opacity;
      opacity: 0;
    }

    &[data-loading='true'] {
      .LayoutLoadingSpinner {
        opacity: 1;
      }
    }
  `;

  return (
    <Container
      css={_containerCSS}
      noMaxWidth
      breakpoints={props.breakpoints}
      onBreakpointChange={handleBreakpointChanges}>
      <div
        className={cn('LayoutWrapper')}
        css={_layoutCSS}
        data-loading={props.isLoading}
        data-sider-state={props.siderState}
        data-sider-hidden={props.siderHiddenMobile}>
        {props.children}
        <div className='LayoutLoadingSpinner'>
          <Spin size='large' />
        </div>
      </div>
    </Container>
  );
};

export default LayoutWrapper;
