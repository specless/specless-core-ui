/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';
import { ILayoutApi, LayoutContext } from './layout-api';
import LayoutMain from './layout-main';
import LayoutBar from './layout-bar';
import LayoutNav from './layout-nav';
import LayoutSubNav from './layout-sub-nav';
import LayoutContent from './layout-content';
import LayoutMessage from './layout-message';
import LayoutSider from './layout-sider';
import LayoutWrapper, { ILayoutWrapperProps } from './layout-wrapper';

export interface ILayoutSubComponents {
  Nav: typeof LayoutNav;
  SubNav: typeof LayoutSubNav;
  Content: typeof LayoutContent;
  Bar: typeof LayoutBar;
  Message: typeof LayoutMessage;
  Main: typeof LayoutMain;
  Sider: typeof LayoutSider;
}
export interface ILayoutProps extends ILayoutWrapperProps {}

export interface ILayoutSubComponentProps {}

const Layout: React.FunctionComponent<ILayoutProps> & ILayoutSubComponents = (
  props
) => {
  const { children } = props;
  return <LayoutWrapper {...props}>{children}</LayoutWrapper>;
};

Layout.Nav = LayoutNav;
Layout.SubNav = LayoutSubNav;
Layout.Content = LayoutContent;
Layout.Bar = LayoutBar;
Layout.Message = LayoutMessage;
Layout.Main = LayoutMain;
Layout.Sider = LayoutSider;

export default Layout;
