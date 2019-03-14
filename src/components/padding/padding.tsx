import styled from '@emotion/styled';
import React, { useContext } from 'react';
import * as Shades from 'shades';
import { ThemeContext } from '../theme/theme';

export interface IPaddingProps {
  size?: string;
  display?: string;
  direction?: string;
  className?: string;
}

export const Padding: React.FC<IPaddingProps> = (props) => {
  const _context = useContext(ThemeContext);

  const { children } = props;
  const _theme = _context.get;

  const PaddingWrapper = styled('span')`
    &.m {
      &.all {
        padding: ${_theme('padding-md')};
      }

      &.top {
        padding-top: ${_theme('padding-md')};
      }

      &.right {
        padding-right: ${_theme('padding-md')};
      }

      &.bottom {
        padding-bottom: ${_theme('padding-md')};
      }

      &.left {
        padding-left: ${_theme('padding-md')};
      }

      &.vertical {
        padding-top: ${_theme('padding-md')};
        padding-bottom: ${_theme('padding-md')};
      }

      &.horizontal {
        padding-left: ${_theme('padding-md')};
        padding-right: ${_theme('padding-md')};
      }
    }

    &.sm {
      &.all {
        padding: ${_theme('padding-sm')};
      }

      &.top {
        padding-top: ${_theme('padding-sm')};
      }

      &.right {
        padding-right: ${_theme('padding-sm')};
      }

      &.bottom {
        padding-bottom: ${_theme('padding-sm')};
      }

      &.left {
        padding-left: ${_theme('padding-sm')};
      }

      &.vertical {
        padding-top: ${_theme('padding-sm')};
        padding-bottom: ${_theme('padding-sm')};
      }

      &.horizontal {
        padding-left: ${_theme('padding-sm')};
        padding-right: ${_theme('padding-sm')};
      }
    }

    &.lg {
      &.all {
        padding: ${_theme('padding-lg')};
      }

      &.top {
        padding-top: ${_theme('padding-lg')};
      }

      &.right {
        padding-right: ${_theme('padding-lg')};
      }

      &.bottom {
        padding-bottom: ${_theme('padding-lg')};
      }

      &.left {
        padding-left: ${_theme('padding-lg')};
      }

      &.vertical {
        padding-top: ${_theme('padding-lg')};
        padding-bottom: ${_theme('padding-lg')};
      }

      &.horizontal {
        padding-left: ${_theme('padding-lg')};
        padding-right: ${_theme('padding-lg')};
      }
    }

    &.xl {
      &.all {
        padding: ${_theme('padding-xl')};
      }

      &.top {
        padding-top: ${_theme('padding-xl')};
      }

      &.right {
        padding-right: ${_theme('padding-xl')};
      }

      &.bottom {
        padding-bottom: ${_theme('padding-xl')};
      }

      &.left {
        padding-left: ${_theme('padding-xl')};
      }

      &.vertical {
        padding-top: ${_theme('padding-xl')};
        padding-bottom: ${_theme('padding-xl')};
      }

      &.horizontal {
        padding-left: ${_theme('padding-xl')};
        padding-right: ${_theme('padding-xl')};
      }
    }

    &.xs {
      &.all {
        padding: ${_theme('padding-xs')};
      }

      &.top {
        padding-top: ${_theme('padding-xs')};
      }

      &.right {
        padding-right: ${_theme('padding-xs')};
      }

      &.bottom {
        padding-bottom: ${_theme('padding-xs')};
      }

      &.left {
        padding-left: ${_theme('padding-xs')};
      }

      &.vertical {
        padding-top: ${_theme('padding-xs')};
        padding-bottom: ${_theme('padding-xs')};
      }

      &.horizontal {
        padding-left: ${_theme('padding-xs')};
        padding-right: ${_theme('padding-xs')};
      }
    }

    &.inline {
      display: inline;
    }

    &.inline-block {
      display: inline-block;
    }

    &.block {
      display: block;
    }
  `;
  const _size = Shades.get('size')(props);
  const _display = Shades.get('display')(props);
  const _direction = Shades.get('direction')(props);
  const _className = Shades.get('className')(props);
  const _classes = `Padding ${_size} ${_display} ${_direction} ${_className}`;

  return <PaddingWrapper className={_classes}>{children}</PaddingWrapper>;
};

Padding.defaultProps = {
  size: 'm',
  display: 'block',
  direction: 'all',
  className: '',
};

export default Padding;
