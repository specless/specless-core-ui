/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from '../theme/theme';
import { ILayoutSubComponentProps } from './layout';
import { SiderControl } from './layout-sider';

const Bar: React.FunctionComponent<ILayoutSubComponentProps> = (props) => {
  const { children } = props;

  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _layoutBarCSS = css`
    position: relative;
    height: ${_theme('num-length-xl') + 'px'};
    display: flex;
    align-items: stretch;
    background-color: ${_theme('light-color')};
    z-index: 2;
    border-bottom: 1px solid ${_theme('dark-faded-6')};
  `;

  const _layoutBarControlCSS = css`
    height: 100%;
    width: 50px;
    position: relative;
    display: none;

    [data-max~='1100'] [data-sider-state='expanded'] & {
      display: block;
    }

    [data-max~='480'] [data-sider-state='expanded'] &,
    [data-max~='480'] [data-sider-state='normal'] & {
      display: block;
    }

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      height: 60%;
      width: 1px;
      top: calc(20% + 1px);
      right: 0;
      background-color: ${_theme('dark-faded-6')};
    }

    .SiderControl {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) translateX(0);
      transition: 0.5s ease all;
      cursor: pointer;
      padding: 12px;
      border-radius: 50%;
      background-color: transparent;
      box-shadow: ${_theme('shadow-none')};

        [data-max~="1100"] [data-sider-hidden='false'] & {
            transform: translateY(-50%) translateX(calc(${_theme('sider-width')} - 10px));
            background-color: ${_theme('primary-color')};
            color: ${_theme('light-color')};
            box-shadow: ${_theme('shadow-elevation-3')};
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            &:hover {
                box-shadow: ${_theme('shadow-hover')}
            }
        }

        [data-max~="480"] [data-sider-hidden='false'] & {
            transform: translateY(-50%) translateX(-26px);
            background-color: ${_theme('primary-color')};
            color: ${_theme('light-color')};
            box-shadow: ${_theme('shadow-elevation-3')};
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;

        &:hover {
          box-shadow: ${_theme('shadow-hover')};
        }
      }

      .anticon {
        position: relative;
        top: 2px;
        margin-left: 3px;
        margin-right: 3px;
      }
    }
  `;

  const _layoutBarContentCSS = css`
    height: 100%;
    flex-grow: 1;
  `;

  return (
    <div className={cn('LayoutBar')} css={_layoutBarCSS}>
      <div className={cn('LayoutBarControl')} css={_layoutBarControlCSS}>
        <SiderControl />
      </div>
      <div className={cn('LayoutBarContent')} css={_layoutBarContentCSS}>
        <div className={cn('layout-bar')}>{children}</div>
      </div>
    </div>
  );
};

export default Bar;
