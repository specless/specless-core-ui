import React from "react";
//import styled from '@emotion/styled';
import { css } from 'emotion/macro';
import Theme from '../components/Theme';
import { Icon as AntIcon } from 'antd';

class Icon extends React.Component {
	static contextType = Theme.Data

	render() {
        const theme = this.context.get;
        const colors = {
            base : {
                main: theme('text-color'),
                light: theme('text-color-translucent')
            },
            light : {
                main: theme('light-color'),
                light: theme('light-faded-4')
            },
            dark : {
                main: theme('dark-color'),
                light: theme('dark-faded-5')
            },
            primary : {
                main: theme('primary-color'),
                light: theme('primary-1')
            },
            success : {
                main: theme('success-color'),
                light: theme('success-1')
            },
            warning : {
                main: theme('warning-color'),
                light: theme('warning-1')
            },
            error : {
                main: theme('error-color'),
                light: theme('error-1')
            },
            normal : {
                main: theme('normal-color'),
                light: theme('normal-1')
            },
            inherit : {
                main: 'inherit',
                light: theme('dark-faded-6')
            }
        }

        const sizes = {
            inherit : 'inherit',
            xsmall: theme('font-size-xs'),
            small: theme('font-size-sm'),
            medium: theme('font-size-md'),
            large: theme('font-size-lg'),
            xlarge: theme('font-size-xl'),
            xxlarge: theme('icon-xxl-size'),
            huge: '64px'
        }

        let currentColor = 'inherit'
        let iconTheme = 'outlined'
        let currentSize = 'inherit'
        
        if (colors[this.props.color]) currentColor = this.props.color;
        if (this.props.theme) iconTheme = this.props.theme;
        if (this.props.size) currentSize = this.props.size;

        const IconClass = css`
            font-size: ${sizes[currentSize]};
            
            svg {
                color: ${colors[currentColor].main};
            }

            &.twoTone {
                svg {
                    [fill="#e6f7ff"] {
                        fill: ${colors[currentColor].light};
                    }
                    [fill="#1890ff"] {
                        fill: currentColor;
                    }
                }
            }
        `
		return <AntIcon{...this.props} className={'Icon ' + IconClass + ' ' + currentColor + ' ' + iconTheme}>{this.props.children}</AntIcon>
	}
}

export default Icon