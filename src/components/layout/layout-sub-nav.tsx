/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from '../theme/theme';
import { ILayoutSubComponentProps } from './layout';
import { LAYOUT_INNER_CONTENT_CSS } from './layout-api';

const SubNav: React.FunctionComponent<ILayoutSubComponentProps> = (props) => {
  const { children } = props;

  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _layoutSubNavCSS = css`
    position: absolute;
    width: ${_theme('sider-width')};
    height: 100%;
    top: 0;
    background-color: ${_theme('light-color')};
    z-index: 2;
    transition: 0.3s ease width, 0.3s ease left, 0.3s ease right,
      0.3s ease opacity;
    border-left: 1px solid ${_theme('dark-faded-6')};

    [data-sider-state='normal'] & {
      left: ${_theme('sider-width')};
      opacity: 0;

      &::after {
        opacity: 0;
      }
    }

    [data-sider-state='expanded-wide'] & {
      left: ${_theme('sider-width-collapsed')};
      width: ${_theme('num-sider-width') + 100}px;
      opacity: 1;

      &::after {
        opacity: 0.025;
      }
    }

    [data-sider-state='collapsed'] & {
      left: ${_theme('sider-width-collapsed')};
      opacity: 0;

      &::after {
        opacity: 0;
      }
    }

    [data-max~='1100'] [data-sider-state='normal'] & {
      left: calc(
        -${_theme('sider-width')} - ${_theme('sider-width-collapsed')}
      );
    }

    [data-min~='1100'] [data-sider-state='expanded'] & {
      left: ${_theme('sider-width-collapsed')};

      &::after {
        opacity: 0.025;
      }
    }

    [data-max~='1100'] [data-sider-state='expanded'] & {
        left: calc(-${_theme('sider-width-collapsed')} - ${_theme('sider-width')});
        border-right: 1px solid ${_theme('dark-faded-7')};
        &::after, &::before {
            opacity: 0.025;
        }
    }

    [data-max~="1100"] [data-sider-state='expanded'][data-sider-hidden='false'] & {
        left: ${_theme('sider-width-collapsed')};
        opacity: 1;

      &::after,
      &::before {
        opacity: 0.025;
      }
    }

    [data-max~='1100'][data-max~='480'] [data-sider-state='expanded'] & {
        width: calc(${_theme('sider-width')} - 40px);
        left: ${_theme('sider-width-collapsed')};
        border-right: none;
        opacity: 1;

      &::after,
      &::before {
        opacity: 0;
      }
    }

    [data-max~='1100'][data-max~='480'] [data-sider-state='expanded'][data-sider-hidden='false'] & {
        left: ${_theme('sider-width-collapsed')};

      &::after,
      &::before {
        opacity: 0.025;
      }
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: 2;
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
      transition: 0.5s ease opacity;
      opacity: 0;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: 2;
      pointer-events: none;
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      top: 0;
      bottom: 0;
      width: 20px;
      left: 100%;
      transition: 0.5s ease opacity;
      opacity: 0;
    }
  `;
  return (
    <div className={cn('LayoutSubNavigation')} css={_layoutSubNavCSS}>
      <div css={LAYOUT_INNER_CONTENT_CSS}>
        <div className={cn('layout-sub-nav')}>{children}</div>
      </div>
    </div>
  );
};

export default SubNav;
