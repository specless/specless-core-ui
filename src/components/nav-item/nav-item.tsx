/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import React, { useContext } from 'react';

import { ConditionalTooltip } from '../conditional-tooltip/conditional-tooltip';
import { INavGroupProps } from '../nav-group/nav-group';
import { ThemeContext } from '../theme/theme';
import Icon from '../icon/icon';

export interface INavItemProps extends React.AnchorHTMLAttributes<any> {
  icon: string;
  title: string;
  state?: 'normal' | 'active' | 'disabled';
  render?: (props: any) => JSX.Element;
  onClick?: React.MouseEventHandler<any>;
}

export const NavItem: React.FunctionComponent<INavItemProps & Pick<INavGroupProps, 'size' | 'type'>> = (props) => {
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const {
    type,
    state,
    size,
    icon,
    title,
    render,
    href,
    target,
    onClick,
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
  const _className = cn('NavItem', state, size, type);
  return (
    <ConditionalTooltip title={title} type={type}>
      {
        render
          ? render({
            ...props,
            className: _className,
            css: _navItemCSS,
          })
          : <a
            href={href}
            target={target}
            onClick={onClick}
            className={_className}
            css={_navItemCSS}>
            <Icon type={icon}/>
            <span>{title}</span>
          </a>
      }
    </ConditionalTooltip>
  );
};

NavItem.defaultProps = {
  size: 'base',
  type: 'menu',
  state: 'normal',
  icon: '',

};

export default NavItem;
