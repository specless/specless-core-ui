/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from '../theme/theme';
import { ILayoutSubComponentProps } from './layout';
import { LAYOUT_INNER_CONTENT_CSS } from './layout-api';

const Nav: React.FunctionComponent<ILayoutSubComponentProps> = (props) => {
  const { children } = props;

  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _layoutNavCSS = css`
    position: relative;
    width: ${_theme('sider-width')};
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.3s ease width;

    [data-sider-state='collapsed'] & {
      transition-delay: 0.3s;
    }

    [data-sider-state='collapsed'] &,
    [data-sider-state='expanded'] &,
    [data-sider-state='expanded-wide'] &,
    [data-max~='1100'] [data-sider-state='normal'] & {
      width: ${_theme('sider-width-collapsed')};
    }

    [data-max~='480'] [data-sider-state='normal'] &,
    [data-max~='480'] [data-sider-state='collapsed'] & {
      width: ${_theme('sider-width')};
    }

    [data-max~='480'] [data-sider-state='expanded'][data-sider-hidden='false'] & {
        width: ${_theme('sider-width-collapsed')};

  `;

  return (
    <div className={cn('LayoutNavigation')} css={_layoutNavCSS}>
      <div css={LAYOUT_INNER_CONTENT_CSS}>
        <div className={cn('layout-nav')}>{children}</div>
      </div>
    </div>
  );
};

export default Nav;
