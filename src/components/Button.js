import React from "react";
//import styled from '@emotion/styled';
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
import { Button as AntButton } from 'antd';

class Button extends React.Component {
    static contextType = Theme.Data
    
    render() {
		const theme = this.context.get;
		
		const shadowStyles = `
			


			&.shadow-0 {
				box-shadow: ${theme('shadow-elevation-0')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${theme('shadow-hover')}
				}
			}

			&.shadow-1 {
				box-shadow: ${theme('shadow-elevation-1')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${theme('shadow-hover')};
				}
			}

			&.shadow-2 {
				box-shadow: ${theme('shadow-elevation-2')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${theme('shadow-hover')};
				}
			}

			&.shadow-3 {
				box-shadow: ${theme('shadow-elevation-3')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${theme('shadow-hover')};
				}
			}

			&.shadow-4 {
				box-shadow: ${theme('shadow-elevation-4')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${theme('shadow-hover')};
				}
			}
		`

		const ButtonStyles = css`
			font-weight: 500;
            text-shadow: none;
			font-family: ${theme('font-family')};
			

			&.ant-btn-round {
				border-radius: 50px;
			}

			&.ant-btn-lg {
				font-size: ${theme('font-size-lg')};
			}

			&.ant-btn-sm {
				font-size: ${theme('font-size-sm')};
				font-weight: 700;
				//line-height: 1;

				> span {
					position: relative;
					top: -1px;
				}

				.anticon {
					font-size: ${theme('font-size-base')};
				}
			}

			${shadowStyles}
		`

		const AltButtonStyles = css`
			font-weight: 800;
			line-height: 2.4;
			text-shadow: none;
			font-family: ${theme('font-family-alt')};

			&.ant-btn-lg {
				line-height: 2.7;
				font-size: ${theme('font-size-lg')};
			}

			&.ant-btn-sm {
				font-size: calc(${theme('font-size-sm')} + 1px);
				line-height: 1.92;

				.anticon {
					font-size: ${theme('font-size-base')};
					position: relative;
					top: 1px;
				}
			}

			&.ant-btn-round {
				border-radius: 50px;
			}

			${shadowStyles}
		`

		const LabelButtonStyles = css`
			font-weight: ${theme('label-font-weight')};
			font-size: ${theme('label-font-size')};
			text-transform: ${theme('label-text-transform')};
			font-family: ${theme('label-font-family')};
			letter-spacing: ${theme('label-letter-spacing')};
			text-shadow: none;

			.anticon {
				font-size: ${theme('font-size-base')};
				position: relative;
				top: 1px;
			}

			&.ant-btn-sm {
				font-size: calc(${theme('font-size-sm')} - 2px);
				line-height: 2.3;

				.anticon {
					font-size: ${theme('font-size-base')};
				}
			}

			&.ant-btn-lg {
				.anticon {
					font-size: ${theme('font-size-lg')};
					position: relative;
					top: 1px;
				}
			}

			&.ant-btn-round {
				border-radius: 50px;
			}

			${shadowStyles}
		`

		let styles = ButtonStyles;
		let shadowClass = 'shadow-none';

		if (this.props.theme === "alt") {
			styles = AltButtonStyles
		} else if (this.props.theme === "label") {
			styles = LabelButtonStyles
		}

		if (this.props.shadow >= 0) {
			shadowClass = 'shadow-' + this.props.shadow
		}

		return (
			<AntButton
				className={'Button ' + shadowClass + ' ' + styles}
				disabled={this.props.disabled}
				ghost={this.props.ghost}
				href={this.props.href}
				htmlType={this.props.htmlType}
				icon={this.props.icon}
				loading={this.props.loading}
				shape={this.props.shape}
				size={this.props.size}
				target={this.props.target}
				type={this.props.type}
				onClick={this.props.onClick}
				block={this.props.block}
			>{this.props.children}</AntButton>
		)
	}
}

Button.Group = AntButton.Group

export default Button