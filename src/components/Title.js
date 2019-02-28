import React from "react"
import { css } from 'emotion/macro';
import Theme from '../components/Theme';

class Title extends React.Component {
	static contextType = Theme.Data

	render() {
        const theme = this.context.get;

		const TitleClass = css`
			margin-top: 16px;
    		margin-bottom: 32px;
    		font-size: 38px;
    		position: relative;
    		font-family: ${theme('font-family-alt')};
			color: ${theme('dark-color')};
		`
		return <h1 className={'Title ' + TitleClass}>{this.props.children}</h1>
	}
}

export default Title