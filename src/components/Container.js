import React from "react";
import ReactDOM from "react-dom";
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
const ResizeSensor = require('css-element-queries/src/ResizeSensor');

if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }           
    }       
    return true;
}

class Container extends React.Component {
    static contextType = Theme.Data;

    state = {
        activeMinBreakpoints: [],
        activeMaxBreakpoints: []
    }

    setActiveBreakpoints = function(breakpoints, node, component) {
        const activeMinBreakpoints = [];
        const activeMaxBreakpoints = [];
        breakpoints.forEach(function(breakpoint) {
            if (Number.isInteger(breakpoint.max)) {
                if (node.clientWidth <= breakpoint.max) {
                    activeMaxBreakpoints.push(breakpoint.max);
                }
            } else if (Number.isInteger(breakpoint.min)) {
                if (node.clientWidth >= breakpoint.min) {
                    activeMinBreakpoints.push(breakpoint.min);
                }
            }
        });

        if (!activeMaxBreakpoints.equals(this.state.activeMaxBreakpoints) || !activeMinBreakpoints.equals(this.state.activeMinBreakpoints)) {
            
            this.setState({
                activeMinBreakpoints: activeMinBreakpoints,
                activeMaxBreakpoints: activeMaxBreakpoints
            });
    
            if (component.props.onBreakpointChange) {
                component.props.onBreakpointChange({
                    max: activeMaxBreakpoints,
                    min: activeMinBreakpoints
                })
            }
        }
    }

	componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        const This = this;
        if (Array.isArray(this.props.breakpoints)) {
            const breakpoints = this.props.breakpoints;
            new ResizeSensor(node, function() {
                This.setActiveBreakpoints(breakpoints, node, This);
            });
            This.setActiveBreakpoints(breakpoints, node, This);
        }
	}
    
    render() {
		const theme = this.context.get;
        
        const ContainerClass = css`
            position: relative;
            max-width: ${this.props.noMaxWidth ? 'none' : theme('max-container-width')};
            margin: 0 auto;
        `

        return (
			<div className={'Container ' + ContainerClass + ' ' + this.props.className} data-min={this.state.activeMinBreakpoints.join(' ')} data-max={this.state.activeMaxBreakpoints.join(' ')}>{this.props.children}</div>
		)
	}
}

export default Container