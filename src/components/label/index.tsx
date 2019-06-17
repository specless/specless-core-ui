/** @jsx jsx */
import React, { useContext } from 'react';
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../theme';

export interface ILabelProps extends React.HTMLAttributes<any> {}
export const Label: React.FunctionComponent<ILabelProps> = (props) => {
  const { children, className, ...rest } = props;
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _css = css`
    font-weight: ${_theme('label-font-weight')};
    font-size: ${_theme('label-font-size')};
    text-transform: ${_theme('label-text-transform')};
    font-family: ${_theme('label-font-family')};
    letter-spacing: ${_theme('label-letter-spacing')};
  `;
  return (
    <span {...rest} className={cn(className, 'Label')} css={_css}>
      {children}
    </span>
  );
};

export default Label;
