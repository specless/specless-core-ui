import React from "react";
//import styled from '@emotion/styled';
import styled from '@emotion/styled';
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
import Container from '../components/Container';
import Icon from '../components/Icon';
import { Spin } from 'antd';

const makeId = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

const InnerContent = css`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`

const LayoutContext = React.createContext({});

class SiderControl extends React.Component {
    static contextType = LayoutContext;

    render() {
        const layoutApi = this.context;
        const layoutState = layoutApi.getState();

        let type = 'toggle'
        let handler = layoutApi.toggleMobileSider
        let icon = ''

        if (layoutState.siderHiddenMobile) {
            icon = 'menu-unfold'
        } else {
            icon = 'menu-fold'
        }

        if (this.props.type === 'show') {
            type = 'show'
            handler = layoutApi.showMobileSider
            icon = 'menu-unfold'
        } else if (this.props.type === 'hide') {
            type = 'hide'
            handler = layoutApi.hideMobileSider
            icon = 'menu-fold'
        }


        return (
            <div onClick={handler} className={"SiderControl " + this.props.className}>
                <Icon type={icon} size="large" color="inherit"/>
            </div>
        )
    }
}

class LayoutMain extends React.Component {
    static contextType = Theme.Data;

    render() {
        const theme = this.context.get;

        const LayoutMain = css`
            position: relative;
            flex-grow: 1;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            z-index: 2;
            transform: translateX(0);
            transition: 0.5s ease transform, 0.5s ease opacity;
            opacity: 1;

            [data-loading="true"] & {
                transform: translateX(100%) !important;
                opacity: 0;
                pointer-events: none;
            }


            &::after {
                content: '';
                display: block;
                position: absolute;
                z-index: 0;
                pointer-events: none;
                background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
                top: 0;
                bottom: 0;
                width: 20px;
                right: 100%;
                opacity: 0.025;
            }

            [data-max~="480"] [data-sider-state='collapsed'][data-sider-hidden='false'] & {
                transform: translateX(${theme('sider-width-collapsed')});
            }

            [data-max~="480"] [data-sider-state='normal'][data-sider-hidden='false'] & {
                transform: translateX(${theme('sider-width')});
            }
        `

        const LayoutBar = css`
            position: relative;
            height: ${theme('num-length-xl') + 'px'};
            display: flex;
            align-items: stretch;
            background-color: ${theme('light-color')};
            z-index: 2;
            border-bottom: 1px solid ${theme('dark-faded-6')};

            // &::after {
            //     content: '';
            //     display: block;
            //     position: absolute;
            //     z-index: 2;
            //     pointer-events: none;
            //     background: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
            //     top: 100%;
            //     height: 20px;
            //     right: 0;
            //     left: 0;
            //     opacity: 0.025;
            //     width: 100%;
            // }
        `

        const LayoutBarControl = css`
            height: 100%;
            width: 50px;
            position: relative;
            display: none;

            [data-max~="480"] & {
                display: block;
            }

            &::after {
                content: '';
                display: inline-block;
                position: absolute;
                height: 60%;
                width: 1px;
                top: calc(20% + 1px);
                right: 0;
                background-color: ${theme('dark-faded-6')};
            }

            .SiderControl {
                position: absolute;
                top: 50%;
                transform: translateY(-50%) translateX(0);
                transition: 0.5s ease all;
                cursor: pointer;
                padding: 12px;
                border-radius: 50%;
                background-color: transparent;
                box-shadow: ${theme('shadow-none')};

                [data-sider-hidden='false'] & {
                    transform: translateY(-50%) translateX(-26px);
                    background-color: ${theme('primary-color')};
                    color: ${theme('light-color')};
                    box-shadow: ${theme('shadow-elevation-3')};

                    &:hover {
                        box-shadow: ${theme('shadow-hover')}
                    }
                }

                .anticon {
                    position: relative;
                    top: 2px;
                    margin-left: 3px;
                    margin-right: 3px;
                }
            }
        `

        const LayoutBarContent = css`
            height: 100%;
            flex-grow: 1;
        `

        const LayoutContent = css`
            background-color: ${theme('light-color')};
            flex-grow: 1;
        `

        const LayoutMessage = css`
            background-color: ${theme('light-gray')};
        `

        return (
            <div className={"LayoutMain " + LayoutMain}>
                <div className={'LayoutMessage ' + LayoutMessage}>{this.props.message}</div>
                <div className={"LayoutBar " + LayoutBar}>
                    <div className={"LayoutBarControl " + LayoutBarControl}>
                        <SiderControl/>
                    </div>
                    <div className={"LayoutBarContent " + LayoutBarContent}>
                        {this.props.headerBar}
                    </div>
                </div>
                
                <div className={"LayoutContent " + LayoutContent}>
                    <div className={InnerContent}>
                        {this.props.children}
                    </div>
                </div>

            </div>
        )
    }
}

class LayoutSider extends React.Component {
    static contextType = Theme.Data;

    render() {
        const theme = this.context.get;

        const LayoutSider = css`
            overflow: hidden;
            position: relative;
            transition: 0.4s ease all;
            transform: translateX(0);
            height: 100%;
            z-index: 1;
            opacity: 1;

            [data-loading="true"] & {
                transform: translateX(-100%) !important;
                opacity: 0;
                pointer-events: none;
            }
            

            [data-min~="1100"] [data-sider-state='normal'] & {
                width: ${theme('sider-width')};
            }

            [data-max~="1100"] [data-sider-state='normal'] & {
                width: ${theme('sider-width-collapsed')};
            }

            [data-sider-state='collapsed'] & {
                width: ${theme('sider-width-collapsed')};
            }

            [data-min~="1100"] [data-sider-state='expanded'] & {
                width: ${theme('sider-width-expanded')};
            }

            [data-max~="1100"] [data-sider-state='expanded'] & {
                width: ${theme('sider-width-collapsed')};
                overflow: visible;
                z-index: 3;
            }

            [data-max~="480"] & {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 0;
            }

            [data-max~="480"] [data-sider-state='normal'] & {
                width: ${theme('sider-width')};
            }

            [data-max~="480"] [data-sider-state='collapsed'] & {
                width: ${theme('sider-width-collapsed')};
            }

            [data-max~="480"] [data-sider-state='expanded'] & {
                width: ${theme('sider-width')};
                z-index: 0;
            }

            [data-max~="480"] [data-sider-state='expanded'][data-sider-hidden='false'] & {
                z-index: 3;
            }

            [data-max~="480"] [data-sider-state='expanded-wide'] & {
                width: ${theme('sider-width')};
                z-index: 0;
            }



            [data-sider-state='expanded-wide'] & {
                width: ${theme('num-sider-width-expanded') + 100}px;
            }
        `

        const LayoutNavigation = css`
            position: relative;
            width: ${theme('sider-width')};
            height: 100%;
            top: 0;
            left: 0;

            [data-max~="480"] [data-sider-state='expanded'][data-sider-hidden='false'] & {
                display: none;
            }
        `

        const LayoutSubNavigation = css`
            position: absolute;
            width: ${theme('sider-width')};
            height: 100%;
            top: 0;
            background-color: ${theme('light-color')};
            z-index: 2;
            transition: 0.3s ease width, 0.3s ease left, 0.3s ease right;

            [data-sider-state='normal'] & {
                left: ${theme('sider-width')};

                &::after {
                    opacity: 0;
                }
            }

            [data-sider-state='expanded-wide'] & {
                left: ${theme('sider-width-collapsed')};
                width: ${theme('num-sider-width') + 100}px;

                &::after {
                    opacity: 0.025;
                }
            }

            [data-sider-state='collapsed'] & {
                left: ${theme('sider-width-collapsed')};

                &::after {
                    opacity: 0;
                }
            }

            [data-min~="1100"] [data-sider-state='expanded'] & {
                left: ${theme('sider-width-collapsed')};

                &::after {
                    opacity: 0.025;
                }
            }

            [data-max~="1100"] [data-sider-state='expanded'] & {
                left: ${theme('sider-width-collapsed')};

                &::after, &::before {
                    opacity: 0.025;
                }
            }

            [data-max~="480"] [data-sider-state='expanded'] & {
                width: ${theme('sider-width')};
                right: ${theme('sider-width')};
                left: auto;

                &::after, &::before {
                    opacity: 0;
                }
            }

            [data-max~="480"] [data-sider-state='expanded'][data-sider-hidden='false'] & {
                right: 0 !important;

                &::after, &::before {
                    opacity: 0.025;
                }
            }

            &::after {
                content: '';
                display: block;
                position: absolute;
                z-index: 2;
                pointer-events: none;
                background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
                top: 0;
                bottom: 0;
                width: 20px;
                right: 100%;
                transition: 0.5s ease opacity;
                opacity: 0;
            }

            &::before {
                content: '';
                display: block;
                position: absolute;
                z-index: 2;
                pointer-events: none;
                background: linear-gradient(to left, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
                top: 0;
                bottom: 0;
                width: 20px;
                left: 100%;
                transition: 0.5s ease opacity;
                opacity: 0;
            }
        `

        return (
            <div className={"LayoutSider " + LayoutSider}>
                <div className={"LayoutNavigation " + LayoutNavigation}>
                    <div className={InnerContent}>
                        {this.props.navigation}
                    </div>
                </div>
                <div className={"LayoutSubNavigation " + LayoutSubNavigation}>
                    <div className={InnerContent}>
                        {this.props.subNavigation}
                    </div>
                </div>
            </div>
        )
    }
}

class LayoutWrapper extends React.Component {
    static contextType = Theme.Data

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            siderState: 'normal',
            siderHiddenMobile: true,
            breakpoints: [
                {max: 480},
                {max: 1100},
                {min: 1100}
            ]
        }

        if (props.siderState === 'collapsed' || 
            props.siderState === 'expanded' || 
            props.siderState === 'expanded-wide') {
                this.state.siderState = props.siderState;
        }

        if (props.siderHiddenMobile === false) {
            this.state.siderHiddenMobile = false
        }

        if (props.isLoading === true) {
            this.state.isLoading = true;
        }

    }

    toggleMobileSider = () => {
        if (this.state.siderHiddenMobile) {
            this.setState({siderHiddenMobile: false});
        } else {
            this.setState({siderHiddenMobile: true});
        }
    }

    hideMobileSider = () => {
        this.setState({siderHiddenMobile: true});
    }

    showMobileSider = () => {
        this.setState({siderHiddenMobile: false});
    }

    setLoading = () => {
        this.setState({isLoading: true});
    }

    unsetLoading = () => {
        this.setState({isLoading: false});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoading === true) {
            this.setLoading()
        }

        if (nextProps.isLoading === false) {
            this.unsetLoading()
        }

        if (nextProps.siderHiddenMobile === true) {
            this.hideMobileSider()
        }

        if (nextProps.siderHiddenMobile === false) {
            this.showMobileSider()
        }

        if (nextProps.siderState === 'collapsed' || 
            nextProps.siderState === 'expanded' || 
            nextProps.siderState === 'expanded-wide') {
            this.setState({
                siderState: nextProps.siderState
            })
        } else {
            this.setState({
                siderState: 'normal'
            })
        }

        console.log(nextProps);
    }

    
    render() {
        const theme = this.context.get;

        const ContainerEl = css`
            background-color: ${theme('light-gray')};
            // position: fixed !important;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            min-width: 300px;
            display: flex;
            flex-direction: column;
        `

        const LayoutWrapper = css`
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            flex-grow: 1;

            .LayoutLoadingSpinner {
                position: absolute;
                display: inline-block;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: 0.3s ease opacity;
                opacity: 0;
            }

            &[data-loading="true"] {
                .LayoutLoadingSpinner {
                    opacity: 1;
                }
            }
        `

        const This = this;

        const layoutApi = {
            toggleMobileSider: this.toggleMobileSider,
            hideMobileSider: this.hideMobileSider,
            showMobileSider: this.showMobileSider,
            setLoading: this.setLoading,
            unsetLoading: this.unsetLoading,
            getState: function() {
                return This.state
            }
        }
        
		return (
            <Container className={ContainerEl} noMaxWidth breakpoints={this.state.breakpoints}>
                <div className={"LayoutWrapper " + LayoutWrapper} data-loading={this.state.isLoading} data-sider-state={this.state.siderState} data-sider-hidden={this.state.siderHiddenMobile}>
                    <LayoutContext.Provider value={layoutApi}>
                        {this.props.children}
                    </LayoutContext.Provider>
                    <div className="LayoutLoadingSpinner">
                        <Spin size="large" />
                    </div>
                </div>
            </Container>
        )
	}
}

class Layout extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            Nav: '',
            SubNav: '',
            Bar: '',
            Content: '',
            Message: ''
        }

        const state = this.state

        const remainingChildren = [];
        if (props.children) {
            if (Array.isArray(props.children)) {
                props.children.forEach(function(child) {
                    state[child.type.name] = child.props.children
                });
            } else {

                if (props.children.type) {

                    if (props.children.type.name) {
                        state[props.children.type.name] = props.children.props.children
                    }
                } else {
                    state.Content = props.children;
                }
            }
        }

    }

    render() {


        return (
            <LayoutWrapper isLoading={this.props.isLoading} siderState={this.props.siderState} siderHiddenMobile={this.props.siderHiddenMobile}>
                <LayoutSider
                    navigation={this.state.Nav}
                    subNavigation={this.state.SubNav}
                >
                </LayoutSider>
                <LayoutMain 
                    headerBar={this.state.Bar}
                    message={this.state.Message}
                >
                    {this.state.Content}
                </LayoutMain>
            </LayoutWrapper>
        )
    }
}

class Nav extends React.Component {
    
    render() {
        return <></>
    }
}

class SubNav extends React.Component {
    
    render() {
        return <></>
    }
}

class Content extends React.Component {
    
    render() {
        return <></>
    }
}

class Bar extends React.Component {
    
    render() {
        return <></>
    }
}

class Message extends React.Component {
    
    render() {
        return <></>
    }
}

Layout.Nav = Nav;
Layout.SubNav = SubNav;
Layout.Content = Content;
Layout.Bar = Bar;
Layout.Message = Message;

Layout.Api = LayoutContext

export default Layout