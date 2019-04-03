/** @jsx jsx */
import React, { useContext } from 'react';
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../theme';
import { HEADING_STYLES } from '../heading';

export interface ITextProps {
  size?: 'normal' | 'large' | 'small' | 'xlarge';
}

export const Text: React.FunctionComponent<ITextProps> = (props) => {
  const { size, children } = props;
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _css = css`
    font-family: ${_theme('font-family')};

    &.normal {
      font-size: ${_theme('font-size-base')};
      p,
      ul,
      ol {
        margin-bottom: 1.5em;
        line-height: 1.65;
      }
    }

    &.large {
      font-size: calc(${_theme('font-size-lg')} + 2px);

      p,
      ul,
      ol {
        margin-bottom: 1.5em;
        line-height: 2;
      }
    }

    &.small {
      font-size: ${_theme('font-size-sm')};

      p,
      ul,
      ol {
        margin-bottom: 1.5em;
        line-height: 1.5;
      }
    }

    &.xlarge {
      font-size: ${_theme('font-size-xxl')};

      p,
      ul,
      ol {
        margin-bottom: 1.5em;
        line-height: 2;
      }
    }

    code {
    }

    img {
      max-width: 100%;
      margin: calc(${_theme('padding-xl')} * 2) auto;
    }

    [data-oembed-type='video'] {
      width: 100%;
      padding-bottom: 56.25%;
      position: relative;
      margin: calc(${_theme('padding-xl')} * 2) auto;

      iframe {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }

    h1 {
      ${HEADING_STYLES.h1};
    }

    h2 {
      ${HEADING_STYLES.h2};
    }

    h3 {
      ${HEADING_STYLES.h3};
    }

    h4 {
      ${HEADING_STYLES.h4};
    }

    h5 {
      ${HEADING_STYLES.h5};
    }

    h6 {
      ${HEADING_STYLES.h6};
    }
  `;
  return (
    <div className={cn('Text', size)} css={_css}>
      {children}
    </div>
  );
};

Text.defaultProps = {
  size: 'normal',
};

export default Text;
