/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import Icon from '../icon/icon';
import React, { useContext } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ConditionalTooltip } from '../conditional-tooltip/conditional-tooltip';
import { INavGroupProps } from '../nav-group/nav-group';
import { ThemeContext } from '../theme/theme';

export interface INavItemProps {
  icon: string;
  title: string;
  state?: 'normal' | 'active' | 'disabled';
}

export const NavItem: React.FunctionComponent<
  INavItemProps & LinkProps & Pick<INavGroupProps, 'size' | 'type'>
> = (props) => {
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const {
    type,
    state,
    size,
    to,
    target,
    onClick,
    icon,
    children,
    title,
  } = props;

  const _navItemCSS = css`
  text-shadow: none;
  display: block;
  padding: 5px 15px 10px 20px;
  border-left: 0px solid transparent;
  transition: 0.3s ease all;
  background-color: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  user-select: none;
  height: 44.25p
  &.base {
      font-weight: ${_theme('label-font-weight')};
      font-size: ${_theme('label-font-size')};
      text-transform: ${_theme('label-text-transform')};
      font-family: ${_theme('label-font-family')};
      letter-spacing: ${_theme('label-letter-spacing')};
  }
  &.small {
      font-size: 12px;
      font-weight: 700;
      padding: 3px 12px 8px 17px;
      .Icon {
          font-size: 18px;
          top: 5px;
      }
      > span {

          &::before {
              bottom: 5px;
          }
      }
      &.tile {
          height: calc(${_theme('sider-width-collapsed')} - 18px);
          width: calc(${_theme('sider-width-collapsed')} - 18px);
      }
  }
  > span {
      margin: 0 15px 0 21px;
      line-height: 2.5;
      color: ${_theme('dark-faded-3')};
      transition: 0.3s ease all;
      position: relative;
      display: inline-block;
      opacity: 1;
      &::before {
          content: "";
          display: inline-block;
          height: 2px;
          position: absolute;
          bottom: 2px;
          width: 12px;
          background-color: ${_theme('dark-faded-5')};
          transition: 0.3s ease background-color, 0.3s ease width;;
      }
  }
  .Icon {
      font-size: 22px;
      position: relative;
      top: 7px;
      transition: 0.3s ease all;
      color: ${_theme('dark-faded-5')}
  }
  &:hover {
      border-color: ${_theme('dark-faded-6')};
      background-color: ${_theme('light-color')};
      > span {
          //color: ${_theme('primary-7')};
          &::before {
              background-color: ${_theme('primary-color')};
              width: 100%;
          }
      }
      .Icon {
          color: ${_theme('dark-faded-3')}
      }
  }
  &:active {
      border-color: ${_theme('primary-7')};
      > span {
          color: ${_theme('primary-8')};
          &::before {
              background-color: ${_theme('primary-7')};
          }
      }
      .Icon {
          color: ${_theme('primary-7')};
      }
  }
  &.active {
      border-color: ${_theme('primary-color')};
      > span {
          color: ${_theme('dark-color')};
          &::before {
              background-color: ${_theme('primary-color')};
              width: 100%;
          }
      }
      .Icon {
          color: ${_theme('primary-color')};
      }
  }
  &.tile {
      height: ${_theme('sider-width-collapsed')};
      width: ${_theme('sider-width-collapsed')};
      display: inline-block;
      position: relative;
      .Icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
      }
      &:hover {
          background-color: ${_theme('dark-faded-6')};
      }
      &.active {
          background-color: ${_theme('light-color')};
      }
      > span {
          display: none;
      }
  }
  &.tab {
      display: inline-block;
  }
  &.disabled {
      pointer-events: none;
      opacity: 0.55;
  }
  &.small {
  }
  `;

  return (
    <ConditionalTooltip title={title} type={type}>
      <Link
        to={to}
        target={target}
        onClick={onClick}
        className={cn('NavItem', state, size, type)}
        css={_navItemCSS}>
        <Icon type={icon} />
        <span>{title}</span>
      </Link>
    </ConditionalTooltip>
  );
};

NavItem.defaultProps = {
  size: 'base',
  type: 'menu',
  state: 'normal',
  icon: '',
  href: '',
};

export default NavItem;
