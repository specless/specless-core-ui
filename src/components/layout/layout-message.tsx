/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from '../theme';
import { ILayoutSubComponentProps } from './';

const Message: React.FunctionComponent<ILayoutSubComponentProps> = (props) => {
  const { children } = props;

  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _layoutMessageCSS = css`
    background-color: ${_theme('light-gray')};
  `;

  return (
    <div className={cn('LayoutMessage')} css={_layoutMessageCSS}>
      <div className={cn('layout-message')}>{children}</div>
    </div>
  );
};

export default Message;
