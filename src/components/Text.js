import React from "react"
//import styled from '@emotion/styled'
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
import Heading from '../components/Heading';

const headingStyles = Heading.headingStyles;

class Text extends React.Component {
    static contextType = Theme.Data
    
    render() {
		const theme = this.context.get
		
		const TextStyles = css`
            font-family: ${theme('font-family')};
            
            &.normal {
                font-size: ${theme('font-size-base')};
				p, ul, ol  {
					margin-bottom: 1.5em;
					line-height: 1.65;
				}
			}

			&.large {
				font-size: calc(${theme('font-size-lg')} + 2px);

				p, ul, ol  {
					margin-bottom: 1.5em;
					line-height: 2;
				}
			}

			&.small {
				font-size: ${theme('font-size-sm')};
				
				p, ul, ol  {
					margin-bottom: 1.5em;
					line-height: 1.5;
				}
			}

			&.xlarge {
				font-size: ${theme('font-size-xxl')};
				
				p, ul, ol  {
					margin-bottom: 1.5em;
					line-height: 2;
				}
			}

			code {

			}

			img {
				max-width: 100%;
				margin: calc(${theme('padding-xl')} * 2) auto;
			}

			[data-oembed-type="video"] {
				width: 100%;
				padding-bottom: 56.25%;
				position: relative;
				margin: calc(${theme('padding-xl')} * 2) auto;

				iframe {
					width: 100%;
					height: 100%;
					position: absolute;
				}
			}

			h1 {
				${headingStyles.h1}
			}

			h2 {
				${headingStyles.h2}
			}

			h3 {
				${headingStyles.h3}
			}

			h4 {
				${headingStyles.h4}
			}

			h5 {
				${headingStyles.h5}
			}

			h6 {
				${headingStyles.h6}
			}
		`
		

		let size = 'normal';

		if (this.props.size === 'large') {
			size = 'large'
		} else if (this.props.size === 'small') {
			size = 'small'
		} else if (this.props.size === 'xlarge') {
			size = 'xlarge'
		}
		return <div className={'Text ' + TextStyles + ' ' + size}>{this.props.children}</div>
	}
}

export default Text