import { css, Global } from '@emotion/core';
import 'antd/dist/antd.less';
import _ from 'lodash/fp';
import React, { useState } from 'react';
import THEME_VARS from '../variables';
import base from './Theme.base';
import fonts from './Theme.fonts';

type THEME = typeof THEME_VARS;

export interface IThemeProps extends React.HTMLAttributes<any> {
  data?: THEME;
}

export interface IThemeContext {
  get: (key: string) => any;
  set: (key: string, value: any) => void;
  _vars: THEME;
}


export const ThemeContext = React.createContext<IThemeContext>({
  get: _.noop,
  set: _.noop,
  _vars: {},
});

export const Theme: React.FunctionComponent<IThemeProps> = (props) => {
  const {
    data,
    children,
  } = props;
  const [_themeData, _setThemeData] = useState<THEME>(data || THEME_VARS);
  const _getVar = (key: string) => {
    return _.get(key, _themeData) as any;

  };
  const _setVar = (key: string, value: any) => {
    const _theme = _.set(key, value, _themeData) as THEME;
    _setThemeData(_theme);
  };
  const _themeAPI = {
    get: _getVar,
    set: _setVar,
    _vars: _themeData,
  };
  const _style = css`
    ${base()}
    ${fonts()}
  `;

  return (
    <ThemeContext.Provider value={_themeAPI}>
      <Global styles={_style}/>
      {children}
    </ThemeContext.Provider>
  );
};

Theme.displayName = 'Theme';

export default Theme;