import React from "react";
//import styled from '@emotion/styled';
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
import Icon from '../components/Icon';
import {Tooltip} from 'antd';

class NavItem extends React.Component {
	static contextType = Theme.Data
    
    render() {
        const theme = this.context.get;
        const types = {
            menu: 'menu',
            tab: 'tab',
            tile: 'tile'
        }
        
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
        let state = 'normal';

        if (sizes[this.props.size]) {
            size = this.props.size
        }

        if (types[this.props.type]) {
            type = this.props.type
        }

        if (states[this.props.state]) {
            state = this.props.state
        }

        const NavItemStyles = css`
            text-shadow: none;
            display: block;
            padding: 5px 15px 10px 20px;
            border-left: 0px solid transparent;
            transition: 0.3s ease all;
            background-color: transparent;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: relative;
            user-select: none;
            height: 44.25px;

            &.base {
                font-weight: ${theme('label-font-weight')};
                font-size: ${theme('label-font-size')};
                text-transform: ${theme('label-text-transform')};
                font-family: ${theme('label-font-family')};
                letter-spacing: ${theme('label-letter-spacing')};
            }

            &.small {
                font-size: 12px;
                font-weight: 700;
                padding: 3px 12px 8px 17px;

                .Icon {
                    font-size: 18px;
                    top: 5px;
                }

                > span {
                    
                    &::before {
                        bottom: 5px;
                    }
                }

                &.tile {
                    height: calc(${theme('sider-width-collapsed')} - 18px);
                    width: calc(${theme('sider-width-collapsed')} - 18px);
                }
            }

            > span {
                margin: 0 15px 0 21px;
                line-height: 2.5;
                color: ${theme('dark-faded-3')};
                transition: 0.3s ease all;
                position: relative;
                display: inline-block;
                opacity: 1;

                &::before {
                    content: "";
                    display: inline-block;
                    height: 2px;
                    position: absolute;
                    bottom: 2px;
                    width: 12px;
                    background-color: ${theme('dark-faded-5')};
                    transition: 0.3s ease background-color, 0.3s ease width;;
                }
            }

            .Icon {
                font-size: 22px;
                position: relative;
                top: 7px;
                transition: 0.3s ease all;
                color: ${theme('dark-faded-5')}
            }

            &:hover {
                border-color: ${theme('dark-faded-6')};
                background-color: ${theme('light-color')};

                > span {
                    //color: ${theme('primary-7')};

                    &::before {
                        background-color: ${theme('primary-color')};
                        width: 100%;
                    }
                }

                .Icon {
                    color: ${theme('dark-faded-3')}
                }
            }

            &:active {
                border-color: ${theme('primary-7')};
                > span {
                    color: ${theme('primary-8')};
                    &::before {
                        background-color: ${theme('primary-7')};
                    }
                }

                .Icon {
                    color: ${theme('primary-7')};
                }
            }

            &.active {
                border-color: ${theme('primary-color')};

                > span {
                    color: ${theme('dark-color')};
                    &::before {
                        background-color: ${theme('primary-color')};
                        width: 100%;
                    }
                }

                .Icon {
                    color: ${theme('primary-color')};
                }
            }            

            &.tile {
                height: ${theme('sider-width-collapsed')};
                width: ${theme('sider-width-collapsed')};
                display: inline-block;
                position: relative;

                .Icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }

                &:hover {
                    background-color: ${theme('dark-faded-6')};
                }

                &.active {
                    background-color: ${theme('light-color')};
                }

                > span {
                    display: none;
                }
            }

            &.tab {
                display: inline-block;
            }

            &.disabled {
                pointer-events: none;
                opacity: 0.55;
            }

            &.small {

            }
        `

        const ConditionalTooltip = function(props) {
            if (type === 'tile') {
                return <Tooltip placement="right" title={props.title}>{props.children}</Tooltip>
            } else {
                return <>{props.children}</>
            }
        }
        
        return (
            <ConditionalTooltip title={this.props.children}>
                <a href={this.props.href} target={this.props.target} onClick={this.props.onClick} className={`NavItem ${state} ${size} ${type} ${NavItemStyles}`}>
                    <Icon type={this.props.icon}/>
                    <span>{this.props.children}</span>
                </a>
            </ConditionalTooltip>
		)
	}
}

export default NavItem