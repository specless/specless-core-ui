import React from "react";
//import styled from '@emotion/styled';
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
import NavItem from '../components/NavItem';
import Container from '../components/Container';
import Item from "antd/lib/list/Item";

class NavGroup extends React.Component {
    static contextType = Theme.Data
    
    constructor(props) {
        super(props)
        this.state = {
            isSmall: false
        }
    }
    
    updateSize = (breakpoints) => {
        if (breakpoints.max.length > 0) {
            this.setState({isSmall: true})
        } else {
            this.setState({isSmall: false})
        }
    }
    
    render() {
        const theme = this.context.get;
        const types = {
            menu: 'menu',
            tab: 'tab'
        }

        const breakpoint = 200;
        
        const sizes = {
            base: 'base',
            small: 'small',
            large: 'large'
        }

        const states = {
            normal: 'normal',
            active: 'active',
            disabled: 'disabled'
        }
        
        let size = 'base';
        let type = 'menu';
        let navItems = [];

        if (sizes[this.props.size]) {
            size = this.props.size
        }

        if (types[this.props.type]) {
            type = this.props.type
        }

        if (Array.isArray(this.props.navItems)) {
            navItems = this.props.navItems;
        }

        if (this.state.isSmall) {
            type = 'tile'
        }

        const NavGroupStyles = css`
            padding-top: 10px;

            &[data-max~="${breakpoint}"] {
                padding-top: 0;
            }
            
            .NavItem:not(:last-child) {
                margin-bottom: 10px;
            }

            &.isSmall-true {
                .NavItem {
                    float: left;
                    margin-bottom: 0 !important;
                }
            }
        `
        const This = this;
        
        return (
            <Container breakpoints={[{max: breakpoint}]} onBreakpointChange={this.updateSize} noMaxWidth className={`NavGroup isSmall-${this.state.isSmall} ${NavGroupStyles}`}>
                {
                    navItems.map(function(navItem, i) {
                        return (
                            <NavItem key={i} type={type} size={size} icon={navItem.icon} state={navItem.state} onClick={navItem.onClick}>{navItem.content}</NavItem>
                        )
                    })
                }
            </Container>
		)
	}
}

export default NavGroup