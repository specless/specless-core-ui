/** @jsx jsx */
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import { Spin } from 'antd';
import React, { useContext, useState } from 'react';
import { IBreakpoint, IBreakpointsContainer } from '../../models/breakpoint';
import Container from '../container/container';
import { ThemeContext } from '../theme/theme';
import _ from 'lodash/fp';
import {
  ILayoutApi,
  ILayoutBreakpointCallBack,
  LayoutContext,
} from './layout-api';

export interface ILayoutWrapperProps {
  siderState?: 'normal' | 'collapsed' | 'expanded' | 'expanded-wide';
  siderHiddenMobile?: boolean;
  isLoading?: boolean;
  onBreakpointChange?: ILayoutBreakpointCallBack | ILayoutBreakpointCallBack[];
}

const LayoutWrapper: React.FunctionComponent<ILayoutWrapperProps> = (props) => {
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _getInitialBreakpointHandlersArray = (
    handlers?: ILayoutBreakpointCallBack | ILayoutBreakpointCallBack[]
  ): ILayoutBreakpointCallBack[] => {
    if (_.isNil) {
      return [] as ILayoutBreakpointCallBack[];
    }
    if (_.isArray) {
      return handlers as ILayoutBreakpointCallBack[];
    }
    return [handlers] as ILayoutBreakpointCallBack[];
  };

  const [_currentSize, _setCurrentSize] = useState<string>('');
  const [_isLoading, _setIsLoading] = useState<boolean>(
    props.isLoading as boolean
  );
  const [_siderState, _setSiderState] = useState<string>(
    props.siderState as string
  );
  const [_siderHiddenMobile, _setSiderHiddenMobile] = useState<boolean>(
    props.siderHiddenMobile as boolean
  );
  const [
    _onBreakpointChangeHandlers,
    _setOnBreakpointChangeHandlers,
  ] = useState<ILayoutBreakpointCallBack[]>(
    _getInitialBreakpointHandlersArray(props.onBreakpointChange)
  );
  const [_breakpoints, _setBreakpoints] = useState<IBreakpoint[]>([
    { max: 480 },
    { max: 1100 },
    { min: 1100 },
  ]);

  const toggleMobileSider = () => {
    _setSiderHiddenMobile(!_siderHiddenMobile);
  };

  const showMobileSider = () => {
    _setSiderHiddenMobile(false);
  };

  const hideMobileSider = () => {
    _setSiderHiddenMobile(true);
  };

  const toggleLoading = () => {
    _setIsLoading(!_isLoading);
  };

  const setLoading = () => {
    _setIsLoading(true);
  };

  const unsetLoading = () => {
    _setIsLoading(false);
  };

  const addBreakpointListener = (callback: ILayoutBreakpointCallBack) => {
    const _listeners = _.concat(_onBreakpointChangeHandlers, [callback]);
    _setOnBreakpointChangeHandlers(_listeners);
  };

  const removeBreakpointListener = (callback: ILayoutBreakpointCallBack) => {
    const _listeners = _.without([callback], _onBreakpointChangeHandlers);
    _setOnBreakpointChangeHandlers(_listeners);
  };

  const handleBreakpointChanges = (breakpoints: IBreakpointsContainer) => {
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
      _setCurrentSize('desktop');
    } else if (hasTablet && hasMobile) {
      _setCurrentSize('mobile');
    } else if (hasTablet) {
      _setCurrentSize('tablet');
    }

    _.forEach((callback) => {
      callback(breakpoints);
    }, _onBreakpointChangeHandlers);
  };

  /*
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading === true) {
      this.setLoading();
    }

    if (nextProps.isLoading === false) {
      this.unsetLoading();
    }

    if (nextProps.siderHiddenMobile === true) {
      this.hideMobileSider();
    }

    if (nextProps.siderHiddenMobile === false) {
      this.showMobileSider();
    }

    if (
      nextProps.siderState === 'collapsed' ||
      nextProps.siderState === 'expanded' ||
      nextProps.siderState === 'expanded-wide'
    ) {
      this.setState({
        siderState: nextProps.siderState,
      });
    } else {
      this.setState({
        siderState: 'normal',
      });
    }
  }
  */

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

  const layoutApi: ILayoutApi = {
    toggleMobileSider,
    hideMobileSider,
    showMobileSider,
    toggleLoading,
    setLoading,
    unsetLoading,
    addBreakpointListener,
    removeBreakpointListener,
    // setLayoutState: setLayoutState,
    getState() {
      return {
        isLoading: _isLoading,
        siderState: _siderState,
        siderHiddenMobile: _siderHiddenMobile,
        currentSize: _currentSize,
        onBreakpointChangeHandlers: _onBreakpointChangeHandlers,
        breakpoints: _breakpoints,
      };
    },
  };

  return (
    <Container
      css={_containerCSS}
      noMaxWidth
      breakpoints={_breakpoints}
      onBreakpointChange={handleBreakpointChanges}>
      <div
        className={cn('LayoutWrapper')}
        css={_layoutCSS}
        data-loading={_isLoading}
        data-sider-state={_siderState}
        data-sider-hidden={_siderHiddenMobile}>
        <LayoutContext.Provider value={layoutApi}>
          {props.children}
        </LayoutContext.Provider>
        <div className='LayoutLoadingSpinner'>
          <Spin size='large' />
        </div>
      </div>
    </Container>
  );
};

LayoutWrapper.defaultProps = {
  siderState: 'normal',
  siderHiddenMobile: true,
  isLoading: false,
  onBreakpointChange: undefined,
};

export default LayoutWrapper;
