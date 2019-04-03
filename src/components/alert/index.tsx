/** @jsx jsx */
import React, { useContext } from 'react';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../theme';

import AntAlert, { AlertProps as AntAlertProps } from 'antd/lib/alert';
import 'antd/lib/alert/style';

export interface IAlertProps {
  theme?: 'alt' | 'label';
  shadow?: number;
}

export const Alert: React.FC<IAlertProps & AntAlertProps> = (props) => {
  const { children, ...rest } = props;
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _css = css``;
  return (
    <AntAlert className='Alert' css={_css} {...rest}>
      {children}
    </AntAlert>
  );
};

export default Alert;
