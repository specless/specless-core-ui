/** @jsx jsx */
import React, { useContext } from 'react';
import { css, jsx, SerializedStyles } from '@emotion/core';
import { ThemeContext } from '../theme';

export interface IHeading {
  level?: number;
}

export const HEADING_STYLES = {
  h1: {} as SerializedStyles,
  h2: {} as SerializedStyles,
  h3: {} as SerializedStyles,
  h4: {} as SerializedStyles,
  h5: {} as SerializedStyles,
  h6: {} as SerializedStyles,
};

export const Heading: React.FunctionComponent<IHeading> = (props) => {
  const { level, children } = props;
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  HEADING_STYLES.h1 = css`
			font-size: ${_theme('h1-font-size')};
			margin-bottom: 1em;
			position: relative;
			font-family: ${_theme('font-family-alt')};
			color: ${_theme('dark-color')};
			a {
				color: ${_theme('dark-color')};
				.anticon-link {
					color: ${_theme('error-color')};
					position: absolute;
					right: 100%;
					filter: grayscale(100%);
					margin-right: 10px;
					opacity: 0.25;
					margin-top: 0.2em;
					transition: 0.3s ease opacity, 0.3s ease filter;
					
					&:hover {
						filter: grayscale(0);
						opacity: 1 !important;
					}
				}
				&:hover {
					.anticon-link {
						opacity: 0.45;
					}
				}
			}
		`;

  HEADING_STYLES.h2 = css`
			font-size: ${_theme('h2-font-size')};
			margin-bottom: 1em;
			position: relative;
            color: ${_theme('dark-color')};
            font-family: ${_theme('font-family')};
			a {
				color: ${_theme('dark-color')};
				.anticon-link {
					color: ${_theme('error-color')};
					position: absolute;
					right: 100%;
					filter: grayscale(100%);
					margin-right: 10px;
					opacity: 0.25;
					margin-top: 0.2em;
					transition: 0.3s ease opacity, 0.3s ease filter;
					
					&:hover {
						filter: grayscale(0);
						opacity: 1 !important;
					}
				}
				&:hover {
					.anticon-link {
						opacity: 0.45;
					}
				}
			}
		`;

  HEADING_STYLES.h3 = css`
			font-size: ${_theme('h3-font-size')};
			color: ${_theme('text-color')};
			margin-top: 0.75em;
            margin-bottom: 1em;
            font-family: ${_theme('font-family')};
		`;

  HEADING_STYLES.h4 = css`
			font-size: ${_theme('h4-font-size')};
			margin-top: 0.75em;
            margin-bottom: 1em;
            font-family: ${_theme('font-family')};
		`;

  HEADING_STYLES.h5 = css`
			font-size: ${_theme('h5-font-size')};
			font-weight: 800;
			margin-top: 0.75em;
			margin-bottom: 1em;
            color: ${_theme('dark-faded-2')};
            font-family: ${_theme('font-family')};
		`;

  HEADING_STYLES.h6 = css`
			font-size: ${_theme('label-font-size')};
			font-weight: ${_theme('label-font-weight')};
			letter-spacing: ${_theme('label-letter-spacing')};
			text-transform: ${_theme('label-text-transform')};
			color: ${_theme('dark-faded-2')};
			margin-top: 0.75em;
            margin-bottom: 1em;
			font-family: ${_theme('font-family')};
		`;
  switch (level) {
    case 1:
      return (
        <h1 className='Heading' css={HEADING_STYLES.h1}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className='Heading' css={HEADING_STYLES.h2}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className='Heading' css={HEADING_STYLES.h3}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className='Heading' css={HEADING_STYLES.h4}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className='Heading' css={HEADING_STYLES.h5}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className='Heading' css={HEADING_STYLES.h6}>
          {children}
        </h6>
      );
    default:
      return null;
  }
};

Heading.defaultProps = {
  level: 2,
};

export default Heading;
