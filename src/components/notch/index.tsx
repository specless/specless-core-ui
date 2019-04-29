/** @jsx jsx */
import React, { useContext } from 'react';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../theme';

export interface INotchProps {
}

export const Notch: React.FunctionComponent<INotchProps> = (props) => {
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _notchCSS = css`
    display: inline-block;
    width: 40px;
    height: 3px;
    background-color: ${_theme('primary-color')};
    margin: ${_theme('padding-md')} 0;
  `;

  return (
    <div className='Notch'>
      <div css={_notchCSS}/>
    </div>
  );
};

export default Notch;
