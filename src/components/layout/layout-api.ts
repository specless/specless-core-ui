import { css } from '@emotion/core';
import _ from 'lodash/fp';
import React from 'react';
import { IBreakpoint, IBreakpointsContainer } from '../../models/breakpoint';

export type ILayoutBreakpointCallBack = (
  breakpoints: IBreakpointsContainer
) => void;

export interface ILayoutApiState {
  isLoading: boolean;
  siderState: string;
  siderHiddenMobile: boolean;
  currentSize: string;
  onBreakpointChangeHandlers: ILayoutBreakpointCallBack[];
  breakpoints: IBreakpoint[];
}

export interface ILayoutApi {
  toggleMobileSider: () => void;
  hideMobileSider: () => void;
  showMobileSider: () => void;
  toggleLoading: () => void;
  setLoading: () => void;
  unsetLoading: () => void;
  addBreakpointListener: (callback: ILayoutBreakpointCallBack) => void;
  removeBreakpointListener: (callback: ILayoutBreakpointCallBack) => void;
  // setLayoutState: setLayoutState,
  getState: () => ILayoutApiState;
}

const DEFAULT_LAYOUT_API_STATE = {
  isLoading: false,
  siderState: '',
  siderHiddenMobile: false,
  currentSize: '',
  onBreakpointChangeHandlers: [],
  breakpoints: [],
};

export const LAYOUT_INNER_CONTENT_CSS = css`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const LayoutContext = React.createContext<ILayoutApi>({
  toggleMobileSider: _.noop,
  hideMobileSider: _.noop,
  showMobileSider: _.noop,
  toggleLoading: _.noop,
  setLoading: _.noop,
  unsetLoading: _.noop,
  addBreakpointListener: _.noop,
  removeBreakpointListener: _.noop,
  getState() {
    return DEFAULT_LAYOUT_API_STATE;
  },
});
