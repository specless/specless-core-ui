import { css } from '@emotion/core';
import React, { ReactChildren, ReactPropTypes, useContext } from 'react';
import { Link } from 'react-router-dom';

import { ConditionalTooltip } from '../conditional-tooltip/conditional-tooltip';
import Icon from '../icon/icon';
import { ThemeContext } from '../theme/theme';

//import styled from '@emotion/styled';
interface INavItemDefaultProps {
    size: 'base' | 'small' | 'large';
    type: 'menu' | 'tab' | 'tile';
    state: 'normal' | 'active' | 'disabled';
}

export interface INavItemDefaultRendererProps extends INavItemDefaultProps {
    NavItemStyles: string;
    to: string;
    target: string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void | undefined;
    icon: string;
    title: string;
}

interface INavItemConditionalTooltipProps {
    title: string;
}

interface INavItemComponentProps extends INavItemDefaultRendererProps {
    renderer: React.FunctionComponent<INavItemDefaultRendererProps>;
}

export const NavItem: React.FunctionComponent<INavItemComponentProps> = (props) => {

    const {
        size,
        type,
        state,
        renderer,
    } = props;

    const contextType = useContext(ThemeContext);

    const theme = contextType.get;

    const NavItemStyles = css`
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
      font-weight: ${theme('label-font-weight')};
      font-size: ${theme('label-font-size')};
      text-transform: ${theme('label-text-transform')};
      font-family: ${theme('label-font-family')};
      letter-spacing: ${theme('label-letter-spacing')};
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
          height: calc(${theme('sider-width-collapsed')} - 18px);
          width: calc(${theme('sider-width-collapsed')} - 18px);
      }
  }
  > span {
      margin: 0 15px 0 21px;
      line-height: 2.5;
      color: ${theme('dark-faded-3')};
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
          background-color: ${theme('dark-faded-5')};
          transition: 0.3s ease background-color, 0.3s ease width;;
      }
  }
  .Icon {
      font-size: 22px;
      position: relative;
      top: 7px;
      transition: 0.3s ease all;
      color: ${theme('dark-faded-5')}
  }
  &:hover {
      border-color: ${theme('dark-faded-6')};
      background-color: ${theme('light-color')};
      > span {
          //color: ${theme('primary-7')};
          &::before {
              background-color: ${theme('primary-color')};
              width: 100%;
          }
      }
      .Icon {
          color: ${theme('dark-faded-3')}
      }
  }
  &:active {
      border-color: ${theme('primary-7')};
      > span {
          color: ${theme('primary-8')};
          &::before {
              background-color: ${theme('primary-7')};
          }
      }
      .Icon {
          color: ${theme('primary-7')};
      }
  }
  &.active {
      border-color: ${theme('primary-color')};
      > span {
          color: ${theme('dark-color')};
          &::before {
              background-color: ${theme('primary-color')};
              width: 100%;
          }
      }
      .Icon {
          color: ${theme('primary-color')};
      }
  }
  &.tile {
      height: ${theme('sider-width-collapsed')};
      width: ${theme('sider-width-collapsed')};
      display: inline-block;
      position: relative;
      .Icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
      }
      &:hover {
          background-color: ${theme('dark-faded-6')};
      }
      &.active {
          background-color: ${theme('light-color')};
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


    return React.cloneElement(renderer, { ...props, NavItemStyles });;
};
const defaultNavItemRenderer: React.FunctionComponent<INavItemDefaultRendererProps> = (props) => {
    const {
        type,
        state,
        size,
        to,
        target,
        onClick,
        icon,
        NavItemStyles,
        children,
        title,
    } = props;

    return (
        <ConditionalTooltip title={title} type={type}>
            <Link
                to={to}
                target={target}
                onClick={onClick}
                className={`NavItem ${state} ${size} ${type} ${NavItemStyles}`}
            >
                <Icon type={icon} />
                <span>{children}</span>
            </Link>
        </ConditionalTooltip>
    );
};

NavItem.defaultProps = {
    size: 'base',
    type: 'menu',
    state: 'normal',
    renderer: defaultNavItemRenderer,
};

export default NavItem
