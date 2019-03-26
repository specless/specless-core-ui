/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import _ from 'lodash/fp';
import React, { useState } from 'react';

import { IBreakpointsContainer } from '../../models/breakpoint';
import Container from '../container/container';
import NavItem, { INavItemProps } from '../nav-item/nav-item';

export interface INavGroupProps {
  size?: 'base' | 'small' | 'large';
  type?: 'menu' | 'tab' | 'tile';
  navItems: INavItemProps[];
}

export const NavGroup: React.FunctionComponent<INavGroupProps> = (props) => {
  const { type, size, navItems } = props;

  const [_isSmall, _setIsSmall] = useState<boolean>(false);
  const _type = _isSmall ? 'tile' : type;

  const _updateSize = (breakpoints: IBreakpointsContainer) => {
    if (breakpoints.max.length > 0) {
      _setIsSmall(true);
    } else {
      _setIsSmall(false);
    }
  };

  const breakpoint = 200;

  const _navGroupCSS = css(`
        &[data-max~="${breakpoint}"] {
            padding-top: 0;
        }

        &.isSmall-true {
            .NavItem {
                float: left;
                margin-bottom: 0 !important;
            }
        }
    `);

  return (
    <Container
      breakpoints={[{ max: breakpoint }]}
      onBreakpointChange={_updateSize}
      noMaxWidth
      className={cn('NavGroup', {
        [`isSmall-${_isSmall}`]: _isSmall,
      })}
      css={_navGroupCSS}>
      {_.pipe(
        _.toPairs,
        _.map(([i, navItem]) => {
          return (
            <NavItem
              key={i}
              size={size}
              type={_type}
              href={navItem.href}
              title={navItem.title}
              icon={navItem.icon}
              state={navItem.state}
              onClick={navItem.onClick}>
              {navItem.title}
            </NavItem>
          );
        })
      )(navItems)}
    </Container>
  );
};

NavGroup.defaultProps = {
  size: 'base',
  type: 'menu',
  navItems: [],
};

export default NavGroup;
