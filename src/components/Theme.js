import React from "react"
const themeVars = require('../variables.js');
import { injectGlobal } from 'emotion';
import fonts from '../components/Theme.fonts.js'
import base from '../components/Theme.base.js'
import helperClasses from '../components/Theme.helperClasses.js'

class Theme extends React.Component {

	constructor(props) {
	    super(props);
	    
	    this.state = {
			themeData: props.data || themeVars
		}
		this.getVar = this.getVar.bind(this);
		this.setVar = this.setVar.bind(this);
	}

	getVar(themeVar) {
		let themeData = this.state.themeData
		return themeData[themeVar]
	}

	setVar(themeVar, value) {
		let themeData = this.state.themeData
		if (value) {
			themeData[themeVar] = value
			this.setState({themeData: themeData})
		}
		return value
	}

	render() {
		
		let themeApi = {
			get: this.getVar,
			set: this.setVar,
			_vars: this.state.themeData
		}

		const theme = themeApi.get

		injectGlobal(fonts(theme));
		injectGlobal(base(theme));
		injectGlobal(helperClasses(theme));

    	return (
    		<Theme.Data.Provider value={themeApi}>
                {this.props.children}
    		</Theme.Data.Provider>
    	)
    }
}

Theme.Data = React.createContext({});

export default Theme