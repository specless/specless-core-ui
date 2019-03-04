import React from "react";
//import styled from '@emotion/styled';
import { css } from 'emotion/macro';
import Padding from '../components/Padding';
import { Card } from 'antd';
import { Resizable, ResizableBox } from 'react-resizable';
import '../../node_modules/react-resizable/css/styles.css';

class StorybookUI extends React.Component {

    state = {
        initialWidth: 800
    }

    componentDidMount() {
        this.setState({
            initialWidth: window.innerWidth
        })
    }
    
    render() {

        if (this.props.type === 'resizable') {
            return (
                <Padding size="lg">
                    <ResizableBox axis="x" width={this.state.initialWidth - 70}>
                        <Card>
                            {this.props.children}
                        </Card>
                    </ResizableBox>
                </Padding>
            )
        } else if (this.props.type === 'viewport') {
            return (
                <div style={{position: 'relative', width: '100vw', height: '100vh'}}>
                    {this.props.children}
                </div>
            )
        } else {
            return (
                <Padding size="lg">
                    <Card>
                        {this.props.children}
                    </Card>
                </Padding>
            )
        }
    }
}

export default StorybookUI