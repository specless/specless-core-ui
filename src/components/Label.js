import React from "react"
//import styled from '@emotion/styled'
import { css } from 'emotion/macro';
import Theme from '../components/Theme';

class Label extends React.Component {
	static contextType = Theme.Data
    
    render() {
		const theme = this.context.get;

        const LabelStyles = css`
			font-weight: ${theme('label-font-weight')};
			font-size: ${theme('label-font-size')};
			text-transform: ${theme('label-text-transform')};
			font-family: ${theme('label-font-family')};
			letter-spacing: ${theme('label-letter-spacing')};
		`
		return <span className={'Label ' + LabelStyles}>{this.props.children}</span>
	}
}

export default Label