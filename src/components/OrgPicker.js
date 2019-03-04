import React from "react"
//import styled from '@emotion/styled'
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { Menu, Dropdown } from 'antd';

class OrgPicker extends React.Component {
    static contextType = Theme.Data

    currentOrg = () => {
        if (Array.isArray(this.props.organizations)) {
            for (let i = 0; i < this.props.organizations.length; i++) { 
                if (this.props.organizations[i].isCurrent) {
                    return this.props.organizations[i];
                }
            }
        }
    }
    
    render() {
		const theme = this.context.get;

        const currentOrg = this.currentOrg();

        const OrgStyles = css`
            height: ${theme('sider-width-collapsed')};
            min-width: ${theme('sider-width')};
            cursor: pointer;
            position: relative;
            border-bottom: 1px solid ${theme('dark-faded-6')};
            transition: 0.3s ease color, 0.3s ease background-color, 0.3s ease border-color;
            background-color: ${theme('light-faded-3')};
            outline: none;
            

            .OrgLogo {
                display: inline-block;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
                width: 28px;
                margin: 18px;
                height: 28px;
                filter: grayscale(100%);
                opacity: 0.45;
                transition: 0.3s ease opacity;
            }

            .OrgName {
                width: calc(100% - ${theme('sider-width-collapsed')});
                display: inline-block;
                position: absolute;
                right: 0;
                top: 24px;
                font-weight: 700;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                user-select: none;
                padding-right: 20px;
                transition: 0.3s ease filter;

                .Icon {
                    float: right;
                    margin: 0 10px 0 6px;
                    color: ${theme('dark-faded-4')};
                    position: absolute;
                    right: 0;
                    top: 2px;
                    transition: 0.3s ease color;
                }
            }

            &:hover, &:focus, &:active {
                color: ${theme('dark-color')};
                background-color: ${theme('light-color')};
                outline: none;

                .OrgLogo {
                    opacity: 0.75;
                    filter: grayscale(0);
                }

                .Icon {
                    color: ${theme('primary-color')};
                }
            }

            &:active, &:focus {
                color: ${theme('primary-8')};

                .OrgLogo {
                    opacity: 1;
                }

                .Icon {
                    color: ${theme('primary-8')};
                }
            }

            
        `

        const OrgMenuItem = css`
            min-width: calc(100% - 12px);
            &:hover, &:focus, &:active {
                background-color: ${theme('dark-faded-7')};
                .OrgLogo {
                    opacity: 1 !important;
                }
            }

            .OrgLogo {
                opacity: 0.75;
                filter: grayscale(0) !important;
            }
        `

        const OrgMenu = css`
            position: relative;
            left: 6px;
            width: calc(100% - 12px);
            max-height: calc(100vh - 74px);
            overflow-x: hidden;
            overflow-y: auto;
            
            .Org {
                &:last-child {
                    border-bottom: none;
                }
            }
        `

        const OrgOptions = css`
            padding: 10px;
            border-bottom: 1px solid ${theme('dark-faded-6')};
            background-color: ${theme('light-color')};
        `

        const orgMenu = (
            <Menu className={OrgMenu}>
                <div className={`OrgOptions ${OrgOptions}`}>
                    <Button icon="setting" block onClick={this.props.onSettingsClick}>Organization Settings</Button>
                </div>
                <div className="OrgSpacer"/>
                {
                    this.props.organizations.map(function(org, i) {
                        if (!org.isCurrent) {
                            return (
                                <div tabindex="0" className={`Org ${OrgStyles} ${OrgMenuItem}`}>
                                    <span className="OrgLogo" style={{backgroundImage: `url(${org.logo})`}}/>
                                    <span className="OrgName">{org.name}</span>
                                </div>
                            )
                        }
                    })
                }
            </Menu>
        )

		return (
            <Dropdown overlay={orgMenu} placement="bottomLeft" trigger="click">
                <div tabindex="0" className={`Org ${OrgStyles}`}>
                    <span className="OrgLogo" style={{backgroundImage: `url(${currentOrg.logo})`}}/>
                    <span className="OrgName">{currentOrg.name}<Icon type="caret-down"/></span>
                </div>
            </Dropdown>
		)
	}
}

export default OrgPicker