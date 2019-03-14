/** #jsx jsx*/
import React, { useContext } from 'react';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../theme/theme';

export interface IHeading {
  level?: number;
}

export const HEADING_STYLES = {
  h1: '',
  h2: '',
  h3: '',
  h4: '',
  h5: '',
  h6: '',
};

export const Heading: React.FunctionComponent<IHeading> = (props) => {
  const { level, children } = props;
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  HEADING_STYLES.h1 = `
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

  HEADING_STYLES.h2 = `
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

  HEADING_STYLES.h3 = `
			font-size: ${_theme('h3-font-size')};
			color: ${_theme('text-color')};
			margin-top: 0.75em;
            margin-bottom: 1em;
            font-family: ${_theme('font-family')};
		`;

  HEADING_STYLES.h4 = `
			font-size: ${_theme('h4-font-size')};
			margin-top: 0.75em;
            margin-bottom: 1em;
            font-family: ${_theme('font-family')};
		`;

  HEADING_STYLES.h5 = `
			font-size: ${_theme('h5-font-size')};
			font-weight: 800;
			margin-top: 0.75em;
			margin-bottom: 1em;
            color: ${_theme('dark-faded-2')};
            font-family: ${_theme('font-family')};
		`;

  HEADING_STYLES.h6 = `
			font-size: ${_theme('label-font-size')};
			font-weight: ${_theme('label-font-weight')};
			letter-spacing: ${_theme('label-letter-spacing')};
			text-transform: ${_theme('label-text-transform')};
			color: ${_theme('dark-faded-2')};
			margin-top: 0.75em;
            margin-bottom: 1em;
			font-family: ${_theme('font-family')};
		`;

  let _styles;
  switch (level) {
    case 1:
      _styles = css`
        ${HEADING_STYLES.h1};
      `;
      return (
        <h1 className='Heading' css={_styles}>
          {children}
        </h1>
      );
    case 3:
      _styles = css`
        ${HEADING_STYLES.h2};
      `;
      return (
        <h3 className='Heading' css={_styles}>
          {children}
        </h3>
      );
    case 4:
      _styles = css`
        ${HEADING_STYLES.h3};
      `;
      return (
        <h4 className='Heading' css={_styles}>
          {children}
        </h4>
      );
    case 5:
      _styles = css`
        ${HEADING_STYLES.h4};
      `;
      return (
        <h5 className='Heading' css={_styles}>
          {children}
        </h5>
      );
    case 6:
      _styles = css`
        ${HEADING_STYLES.h5};
      `;
      return (
        <h6 className='Heading' css={_styles}>
          {children}
        </h6>
      );
    default:
      _styles = css`
        ${HEADING_STYLES.h6};
      `;
      return (
        <h2 className='Heading' css={_styles}>
          {children}
        </h2>
      );
  }
};

Heading.defaultProps = {
  level: 2,
};

export default Heading;
