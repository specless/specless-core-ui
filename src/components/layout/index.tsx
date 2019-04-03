import React from 'react';
import {
  ILayoutBreakpointCallBack,
  ISiderState,
  LayoutContext,
  useLayoutApi,
} from './layout-api';
import LayoutBar from './layout-bar';
import LayoutMain from './layout-main';
import LayoutNav from './layout-nav';
import LayoutSubNav from './layout-sub-nav';
import LayoutContent from './layout-content';
import LayoutMessage from './layout-message';
import LayoutSider from './layout-sider';
import LayoutWrapper from './layout-wrapper';

export interface ILayoutSubComponents {
  Nav: typeof LayoutNav;
  SubNav: typeof LayoutSubNav;
  Content: typeof LayoutContent;
  Bar: typeof LayoutBar;
  Message: typeof LayoutMessage;
  Sider: typeof LayoutSider;
  Main: typeof LayoutMain;
  Context: typeof LayoutContext;
}
export interface ILayoutProps {
  siderState?: ISiderState;
  siderHiddenMobile?: boolean;
  isLoading?: boolean;
  onBreakpointChange?: ILayoutBreakpointCallBack | ILayoutBreakpointCallBack[];
}

export interface ILayoutSubComponentProps {}

export const Layout: React.FunctionComponent<ILayoutProps> &
  ILayoutSubComponents = (props) => {
  const { children } = props;
  const _layoutApi = useLayoutApi(props);
  const _layoutState = _layoutApi.getState();
  const {
    siderState,
    siderHiddenMobile,
    isLoading,
    onBreakpointChangeHandlers,
    breakpoints,
  } = _layoutState;
  return (
    <LayoutContext.Provider value={_layoutApi}>
      <LayoutWrapper
        breakpoints={breakpoints}
        siderState={siderState}
        siderHiddenMobile={siderHiddenMobile}
        isLoading={isLoading}
        onBreakpointChange={onBreakpointChangeHandlers}>
        {children}
      </LayoutWrapper>
    </LayoutContext.Provider>
  );
};

Layout.Nav = LayoutNav;
Layout.SubNav = LayoutSubNav;
Layout.Content = LayoutContent;
Layout.Bar = LayoutBar;
Layout.Message = LayoutMessage;
Layout.Sider = LayoutSider;
Layout.Main = LayoutMain;
Layout.Context = LayoutContext;

Layout.defaultProps = {
  siderState: 'normal',
  siderHiddenMobile: true,
  isLoading: false,
  onBreakpointChange: undefined,
};

export default Layout;
