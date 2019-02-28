import React from "react";
//import styled from '@emotion/styled';
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
import { Alert as AntAlert } from 'antd';

class Alert extends React.Component {
	static contextType = Theme.Data
    
    render() {
		const theme = this.context.get;
		const AlertStyles = css``
        
        return (
			<AntAlert
                className={'Alert ' + AlertStyles}
				afterClose={this.props.afterClose}
				banner={this.props.banner}
				closable={this.props.closable}
				closeText={this.props.closeText}
				description={this.props.description}
				icon={this.props.icon}
				message={this.props.message}
				showIcon={this.props.showIcon}
				type={this.props.type}
				onClose={this.props.onClose}
			>
				{this.props.children}
			</AntAlert>
		)
	}
}

export default Alert