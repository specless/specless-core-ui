import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../theme/theme';

export interface INotchProps {}

const Notch: React.FunctionComponent<INotchProps> = (props) => {
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const Notch = styled.div`
    display: inline-block;
    width: 40px;
    height: 3px;
    background-color: ${_theme('primary-color')};
    margin: ${_theme('padding-md')} 0;
  `;

  return (
    <div className='Notch'>
      <Notch />
    </div>
  );
};

export default Notch;
