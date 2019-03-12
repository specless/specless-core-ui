import { css } from '@emotion/core';
import _ from 'lodash/fp';
import React, { useState } from 'react';
import { IBreakpoint, IBreakpointsContainer } from '../../models/breakpoint';
import { ILayoutProps } from './layout';

export type ILayoutBreakpointCallBack = (
  breakpoints: IBreakpointsContainer
) => void;

export type ISiderState = 'normal' | 'collapsed' | 'expanded' | 'expanded-wide';

export interface ILayoutApiState {
  isLoading: boolean;
  siderState: ISiderState;
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
  setBreakpoints: (breakpoints: IBreakpoint[]) => void;
  setCurrentSize: (currentSize: string) => void;
  setSiderState: (state: ISiderState) => void;
  addBreakpointListener: (callback: ILayoutBreakpointCallBack) => void;
  removeBreakpointListener: (callback: ILayoutBreakpointCallBack) => void;
  getState: () => ILayoutApiState;
}

const DEFAULT_LAYOUT_API_STATE = {
  isLoading: false,
  siderState: 'normal' as ISiderState,
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

export const useLayoutApi = (props: ILayoutProps): ILayoutApi => {
  const _getInitialBreakpointHandlersArray = (
    handlers?: ILayoutBreakpointCallBack | ILayoutBreakpointCallBack[]
  ): ILayoutBreakpointCallBack[] => {
    if (_.isNil) {
      return [] as ILayoutBreakpointCallBack[];
    }
    if (_.isArray) {
      return handlers as ILayoutBreakpointCallBack[];
    }
    return [handlers] as ILayoutBreakpointCallBack[];
  };

  const [_currentSize, _setCurrentSize] = useState<string>('');
  const [_isLoading, _setIsLoading] = useState<boolean>(
    props.isLoading as boolean
  );
  const [_siderState, _setSiderState] = useState<ISiderState>(
    props.siderState as ISiderState
  );
  const [_siderHiddenMobile, _setSiderHiddenMobile] = useState<boolean>(
    props.siderHiddenMobile as boolean
  );
  const [
    _onBreakpointChangeHandlers,
    _setOnBreakpointChangeHandlers,
  ] = useState<ILayoutBreakpointCallBack[]>(
    _getInitialBreakpointHandlersArray(props.onBreakpointChange)
  );
  const [_breakpoints, _setBreakpoints] = useState<IBreakpoint[]>([
    { max: 480 },
    { max: 1100 },
    { min: 1100 },
  ]);

  const toggleMobileSider = () => {
    _setSiderHiddenMobile(!_siderHiddenMobile);
  };

  const showMobileSider = () => {
    _setSiderHiddenMobile(false);
  };

  const hideMobileSider = () => {
    _setSiderHiddenMobile(true);
  };

  const toggleLoading = () => {
    _setIsLoading(!_isLoading);
  };

  const setLoading = () => {
    _setIsLoading(true);
  };

  const unsetLoading = () => {
    _setIsLoading(false);
  };

  const setBreakpoints = (breakpoints: IBreakpoint[]) => {
    _setBreakpoints(breakpoints);
  };

  const setCurrentSize = (currentSize: string) => {
    _setCurrentSize(currentSize);
  };

  const setSiderState = (state: ISiderState) => {
    _setSiderState(state);
  };

  const addBreakpointListener = (callback: ILayoutBreakpointCallBack) => {
    const _listeners = _.concat(_onBreakpointChangeHandlers, [callback]);
    _setOnBreakpointChangeHandlers(_listeners);
  };

  const removeBreakpointListener = (callback: ILayoutBreakpointCallBack) => {
    const _listeners = _.without([callback], _onBreakpointChangeHandlers);
    _setOnBreakpointChangeHandlers(_listeners);
  };

  return {
    toggleMobileSider,
    hideMobileSider,
    showMobileSider,
    toggleLoading,
    setLoading,
    unsetLoading,
    addBreakpointListener,
    removeBreakpointListener,
    setBreakpoints,
    setCurrentSize,
    setSiderState,
    getState() {
      return {
        isLoading: _isLoading,
        siderState: _siderState,
        siderHiddenMobile: _siderHiddenMobile,
        currentSize: _currentSize,
        onBreakpointChangeHandlers: _onBreakpointChangeHandlers,
        breakpoints: _breakpoints,
      };
    },
  };
};

export const LayoutContext = React.createContext<ILayoutApi>({
  toggleMobileSider: _.noop,
  hideMobileSider: _.noop,
  showMobileSider: _.noop,
  toggleLoading: _.noop,
  setLoading: _.noop,
  unsetLoading: _.noop,
  setBreakpoints: _.noop,
  setCurrentSize: _.noop,
  setSiderState: _.noop,
  addBreakpointListener: _.noop,
  removeBreakpointListener: _.noop,
  getState() {
    return DEFAULT_LAYOUT_API_STATE;
  },
});
