import { css } from 'emotion/macro';
import _ from 'lodash/fp';
import React, { useContext, useState } from 'react';

import { IBreakpointsContainer } from '../../models/breakpoint';
import Container from '../container/container';
import NavItem, { INavItemDefaultRendererProps } from './nav-item';

interface INavGroupComponentProps {
    size: 'base' | 'small' | 'large';
    type: 'menu' | 'tab' | 'tile';
    navItems: INavItemDefaultRendererProps[];
}


export const NavGroup: React.FunctionComponent<INavGroupComponentProps> = (props) => {

    const [isSmall, setIsSmall] = useState<boolean>(false);

    let {
        type,
        size,
        navItems,
    } = props;

    type = isSmall ? 'tile' : props.type;

    const updateSize = (breakpoints: IBreakpointsContainer) => {
        if (breakpoints.max.length > 0) {
            setIsSmall(true);
        } else {
            setIsSmall(false);
        }
    };

    const breakpoint = 200;

    const NavGroupStyles = css(`
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
    `);

    return (
        <Container
            breakpoints={[{ max: breakpoint }]}
            onBreakpointChange={updateSize}
            noMaxWidth
            className={`NavGroup isSmall-${isSmall} ${NavGroupStyles}`}
        >
            {
                _.pipe(
                    _.toPairs,
                    _.map(([navItem, i]) => {
                        return (
                            <NavItem
                                key={i}
                                type={type}
                                size={size}
                                icon={navItem.icon}
                                state={navItem.state}
                                onClick={navItem.onClick}
                            >
                                {navItem.content}
                            </NavItem>
                        )
                    })
                )(navItems)
            }
        </Container>
    );
};

NavGroup.defaultProps = {
    size: 'base',
    type: 'menu',
    navItems: [],
};

export default NavGroup
