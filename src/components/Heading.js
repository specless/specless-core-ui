import React from "react"
//import styled from '@emotion/styled'
import { css } from 'emotion/macro';
import Theme from '../components/Theme';

const headingStyles = {}

class Heading extends React.Component {
    static contextType = Theme.Data
    
    render() {
		const theme = this.context.get;
		
		headingStyles.h1 = `
			font-size: ${theme('h1-font-size')};
			margin-bottom: 1em;
			position: relative;
			font-family: ${theme('font-family-alt')};
			color: ${theme('dark-color')};

			a {
				color: ${theme('dark-color')};

				.anticon-link {
					color: ${theme('error-color')};
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
		`

		headingStyles.h2 = `
			font-size: ${theme('h2-font-size')};
			margin-bottom: 1em;
			position: relative;
            color: ${theme('dark-color')};
            font-family: ${theme('font-family')};

			a {
				color: ${theme('dark-color')};

				.anticon-link {
					color: ${theme('error-color')};
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
		`

		headingStyles.h3 = `
			font-size: ${theme('h3-font-size')};
			color: ${theme('text-color')};
			margin-top: 0.75em;
            margin-bottom: 1em;
            font-family: ${theme('font-family')};
		`

		headingStyles.h4 = `
			font-size: ${theme('h4-font-size')};
			margin-top: 0.75em;
            margin-bottom: 1em;
            font-family: ${theme('font-family')};
		`
		
		headingStyles.h5 = `
			font-size: ${theme('h5-font-size')};
			font-weight: 800;
			margin-top: 0.75em;
			margin-bottom: 1em;
            color: ${theme('dark-faded-2')};
            font-family: ${theme('font-family')};
		`
		
		headingStyles.h6 = `
			font-size: ${theme('label-font-size')};
			font-weight: ${theme('label-font-weight')};
			letter-spacing: ${theme('label-letter-spacing')};
			text-transform: ${theme('label-text-transform')};
			color: ${theme('dark-faded-2')};
			margin-top: 0.75em;
            margin-bottom: 1em;
			font-family: ${theme('font-family')};
		`

		const H1 = css`${headingStyles.h1}`;
		const H2 = css`${headingStyles.h2}`;
		const H3 = css`${headingStyles.h3}`;
		const H4 = css`${headingStyles.h4}`;
		const H5 = css`${headingStyles.h5}`;
		const H6 = css`${headingStyles.h6}`;

		if (this.props.level == 1) {
			return (
				<h1 className={'Heading ' + H1}>{this.props.children}</h1>
			)
		} else if (this.props.level == 3) {
			return (
				<h3 className={'Heading ' + H3}>{this.props.children}</h3>
			)
		} else if (this.props.level == 4) {
			return (
				<h4 className={'Heading ' + H4}>{this.props.children}</h4>
			)
		} else if (this.props.level == 5) {
			return (
				<h5 className={'Heading ' + H5}>{this.props.children}</h5>
			)
		} else if (this.props.level == 6) {
			return (
				<h6 className={'Heading ' + H6}>{this.props.children}</h6>
			)
		} else {
			return (
				<h2 className={'Heading ' + H2}>{this.props.children}</h2>
			)
		}
	}
}

Heading.headingStyles = headingStyles;

export default Heading