/** @jsx jsx */
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import React, { useContext } from 'react';
import { ThemeContext } from '../theme/theme';

export interface ILayoutMain {}

export const LayoutMain: React.FunctionComponent<ILayoutMain> = (props) => {
  const { children } = props;

  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _layoutMainCSS = css`
    position: relative;
    flex-grow: 1;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    z-index: 2;
    transform: translateX(0);
    transition: 0.5s ease transform, 0.5s ease opacity;
    opacity: 1;
    border-left: 1px solid ${_theme('dark-faded-7')};
    
    [data-sider-state='disabled'] & {
      border-left: 0px solid transparent;
    }

    [data-loading='true'] & {
      transform: translateX(100%) !important;
      opacity: 0;
      pointer-events: none;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: 0;
      pointer-events: none;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      top: 0;
      bottom: 0;
      width: 20px;
      right: 100%;
      opacity: 0.025;
    }

    [data-max~='480']
      [data-sider-state='collapsed'][data-sider-hidden='false']
      & {
      transform: translateX(${_theme('sider-width-collapsed')});
    }

    [data-max~='480'] [data-sider-state='normal'][data-sider-hidden='false'] & {
      transform: translateX(${_theme('sider-width')});
    }
  `;
  return (
    <div className={cn('LayoutMain')} css={_layoutMainCSS}>
      {children}
    </div>
  );
};

export default LayoutMain;
