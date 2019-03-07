/** @jsx jsx */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import { ThemeContext } from '../theme/theme';
const ResizeSensor = require('css-element-queries/src/ResizeSensor');

import _ from 'lodash/fp';

export interface IContainerProps {
  noMaxWidth?: boolean;
  breakpoints?: IBreakpoint[];
  onBreakpointChange?: (breakpoints: IBreakpointsContainer) => unknown;
}

export interface IBreakpointsContainer {
  max: number[];
  min: number[];
}

export interface IBreakpoint {
  max?: number;
  min?: number;
}

const Container: React.FunctionComponent<
  IContainerProps & React.HTMLAttributes<any>
> = (props) => {
  const {
    noMaxWidth,
    breakpoints,
    className,
    children,
    onBreakpointChange,
  } = props;

  const [_activeMinBreakpoints, _setActiveMinBreakpoints] = useState<number[]>(
    []
  );
  const [_activeMaxBreakpoints, _setActiveMaxBreakpoints] = useState<number[]>(
    []
  );

  const _domRef = useRef<HTMLDivElement | null>(null);
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _setActiveBreakpoints = (
    breakpoints: IBreakpoint[],
    node: HTMLDivElement
  ) => {
    if (!node) {
      return;
    }

    const _appendToAccumulator = (
      result: IBreakpointsContainer,
      val: number,
      mode: 'min' | 'max'
    ) => {
      const _old = _.get(mode, result);
      const _update = _.concat(_old, val);
      return _.set(mode, _update, result);
    };

    const _breakpoints = _.reduce<IBreakpoint, IBreakpointsContainer>(
      (result: IBreakpointsContainer, value: IBreakpoint) => {
        const _max = value.max as number;
        const _min = value.min as number;
        const _clientWidth = node.clientWidth;
        if (_.isInteger(_max) && _clientWidth <= _max) {
          return _appendToAccumulator(result, _max, 'max');
        } else if (_.isInteger(_min) && _clientWidth >= _min) {
          return _appendToAccumulator(result, _min, 'min');
        } else {
          return result;
        }
      },
      { max: [], min: [] },
      breakpoints
    );
    _setActiveMaxBreakpoints(_breakpoints.max);
    _setActiveMinBreakpoints(_breakpoints.min);
    if (onBreakpointChange) {
      onBreakpointChange({
        max: _breakpoints.max,
        min: _breakpoints.min,
      });
    }
  };

  useEffect(() => {
    if (!_domRef || !_domRef.current) {
      return;
    }
    const _node = _domRef.current;
    if (_.isArray(breakpoints)) {
      new ResizeSensor(_domRef, () => {
        _setActiveBreakpoints(breakpoints, _node);
      });
      _setActiveBreakpoints(breakpoints, _node);
    }
  }, [_domRef]);

  const _css = css`
    position: relative;
    max-width: ${noMaxWidth ? 'none' : _theme('max-container-width')};
    margin: 0 auto;
  `;

  return (
    <div
      ref={_domRef}
      className={cn('Container', className)}
      css={_css}
      data-min={_.join(' ', _activeMinBreakpoints)}
      data-max={_.join(' ', _activeMaxBreakpoints)}>
      {children}
    </div>
  );
};

export default Container;
