import { AlertProps as AntAlertProps } from 'antd/lib/alert';
import React, { useContext } from 'react';
import { css } from '@emotion/core';
import { ThemeContext } from '../theme/theme';
import { Alert as AntAlert } from 'antd';

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
