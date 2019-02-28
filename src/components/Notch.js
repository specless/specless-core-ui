import React from "react"
import styled from '@emotion/styled'
//import { css } from 'emotion/macro';
import Theme from '../components/Theme';

class Notch extends React.Component {
    static contextType = Theme.Data
    
    render() {
		const theme = this.context.get;

		const Notch = styled.div`
			display: inline-block;
			width: 40px;
			height: 3px;
			background-color: ${theme('primary-color')};
			margin: ${theme('padding-md')} 0;
		`

		return(
			<div className="Notch">
				<Notch/>
			</div>
		)
	}
}

export default Notch