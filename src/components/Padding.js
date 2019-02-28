import React from "react"
import styled from '@emotion/styled'
//import { css } from 'emotion/macro';
import Theme from '../components/Theme';

class Padding extends React.Component {
	static contextType = Theme.Data
    
    render() {
		const theme = this.context.get;

		const PaddingWrapper = styled.span`
			&.m {
				&.all {
					padding: ${theme('padding-md')};
				}

				&.top {
					padding-top: ${theme('padding-md')};
				}

				&.right {
					padding-right: ${theme('padding-md')};
				}

				&.bottom {
					padding-bottom: ${theme('padding-md')};
				}

				&.left {
					padding-left: ${theme('padding-md')};
				}

				&.vertical {
					padding-top: ${theme('padding-md')};
					padding-bottom: ${theme('padding-md')};
				}

				&.horizontal {
					padding-left: ${theme('padding-md')};
					padding-right: ${theme('padding-md')};
				}
			}

			&.sm {
				&.all {
					padding: ${theme('padding-sm')};
				}

				&.top {
					padding-top: ${theme('padding-sm')};
				}

				&.right {
					padding-right: ${theme('padding-sm')};
				}

				&.bottom {
					padding-bottom: ${theme('padding-sm')};
				}

				&.left {
					padding-left: ${theme('padding-sm')};
				}

				&.vertical {
					padding-top: ${theme('padding-sm')};
					padding-bottom: ${theme('padding-sm')};
				}

				&.horizontal {
					padding-left: ${theme('padding-sm')};
					padding-right: ${theme('padding-sm')};
				}
			}

			&.lg {
				&.all {
					padding: ${theme('padding-lg')};
				}

				&.top {
					padding-top: ${theme('padding-lg')};
				}

				&.right {
					padding-right: ${theme('padding-lg')};
				}

				&.bottom {
					padding-bottom: ${theme('padding-lg')};
				}

				&.left {
					padding-left: ${theme('padding-lg')};
				}

				&.vertical {
					padding-top: ${theme('padding-lg')};
					padding-bottom: ${theme('padding-lg')};
				}

				&.horizontal {
					padding-left: ${theme('padding-lg')};
					padding-right: ${theme('padding-lg')};
				}
			}

			&.xl {
				&.all {
					padding: ${theme('padding-xl')};
				}

				&.top {
					padding-top: ${theme('padding-xl')};
				}

				&.right {
					padding-right: ${theme('padding-xl')};
				}

				&.bottom {
					padding-bottom: ${theme('padding-xl')};
				}

				&.left {
					padding-left: ${theme('padding-xl')};
				}

				&.vertical {
					padding-top: ${theme('padding-xl')};
					padding-bottom: ${theme('padding-xl')};
				}

				&.horizontal {
					padding-left: ${theme('padding-xl')};
					padding-right: ${theme('padding-xl')};
				}
			}

			&.xs {
				&.all {
					padding: ${theme('padding-xs')};
				}

				&.top {
					padding-top: ${theme('padding-xs')};
				}

				&.right {
					padding-right: ${theme('padding-xs')};
				}

				&.bottom {
					padding-bottom: ${theme('padding-xs')};
				}

				&.left {
					padding-left: ${theme('padding-xs')};
				}

				&.vertical {
					padding-top: ${theme('padding-xs')};
					padding-bottom: ${theme('padding-xs')};
				}

				&.horizontal {
					padding-left: ${theme('padding-xs')};
					padding-right: ${theme('padding-xs')};
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
		`
		let size = 'm';
		let display = 'block';
		let direction = 'all';
		let className = '';

		if (this.props.size) {
			size = this.props.size
		}

		if (this.props.display) {
			display = this.props.display
		}

		if (this.props.direction) {
			direction = this.props.direction
		}

		if (this.props.className) {
			className = this.props.className
		}

		return <PaddingWrapper className={'Padding ' + size + ' ' + display + ' ' + direction + ' ' + className}>{this.props.children}</PaddingWrapper>
	}
}

export default Padding