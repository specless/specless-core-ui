/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from '../theme';
import { ILayoutSubComponentProps } from './';
import { LAYOUT_INNER_CONTENT_CSS } from './layout-api';

const Content: React.FunctionComponent<ILayoutSubComponentProps> = (props) => {
  const { children } = props;

  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _layoutContentCSS = css`
    background-color: ${_theme('light-color')};
    flex-grow: 1;
    position: relative;
  `;
  return (
    <div className={cn('LayoutContent')} css={_layoutContentCSS}>
      <div css={LAYOUT_INNER_CONTENT_CSS}>
        <div className={cn('layout-content')}>{children}</div>
      </div>
    </div>
  );
};

export default Content;
