/** @jsx jsx */
import React, { useContext } from 'react';
import _ from 'lodash/fp';
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import AntIcon, { IconProps as AntIconProps, ThemeType } from 'antd/lib/icon';
import { ThemeContext } from '../theme';

export interface IIcon {
  color?: string;
  theme?: ThemeType;
  size?: string;
}

export const Icon: React.FunctionComponent<IIcon & AntIconProps> = (props) => {
  const { color, size, children, theme, ...rest } = props;
  const _context = useContext(ThemeContext);
  const _theme = _context.get;
  const colors = {
    base: {
      main: _theme('text-color'),
      light: _theme('text-color-translucent'),
    },
    light: {
      main: _theme('light-color'),
      light: _theme('light-faded-4'),
    },
    dark: {
      main: _theme('dark-color'),
      light: _theme('dark-faded-5'),
    },
    primary: {
      main: _theme('primary-color'),
      light: _theme('primary-1'),
    },
    success: {
      main: _theme('success-color'),
      light: _theme('success-1'),
    },
    warning: {
      main: _theme('warning-color'),
      light: _theme('warning-1'),
    },
    error: {
      main: _theme('error-color'),
      light: _theme('error-1'),
    },
    normal: {
      main: _theme('normal-color'),
      light: _theme('normal-1'),
    },
    inherit: {
      main: 'inherit',
      light: _theme('dark-faded-6'),
    },
  };

  const sizes = {
    inherit: 'inherit',
    xsmall: _theme('font-size-xs'),
    small: _theme('font-size-sm'),
    medium: _theme('font-size-md'),
    large: _theme('font-size-lg'),
    xlarge: _theme('font-size-xl'),
    xxlarge: _theme('icon-xxl-size'),
    huge: '64px',
  };

  const _fontSize = _.get(size, sizes);
  const _colorMain = _.get('color.main', colors);
  const _colorLight = _.get('color.light', colors);

  const _css = css`
    font-size: ${_fontSize};

    svg {
      color: ${_colorMain};
    }

    &.twoTone {
      svg {
        [fill='#e6f7ff'] {
          fill: ${_colorLight};
        }
        [fill='#1890ff'] {
          fill: currentColor;
        }
      }
    }
  `;
  return (
    <AntIcon
      className={cn('Icon', theme, color)}
      theme={theme}
      css={_css}
      {...rest}>
      {children}
    </AntIcon>
  );
};

Icon.defaultProps = {
  color: 'inherit' as any,
  theme: 'outlined',
  size: 'inherit',
};

Icon.displayName = 'Icon';

export default Icon;
