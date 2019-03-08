/** @jsx jsx */
import cn from 'classnames';
import React, { useContext } from 'react';
import Icon from '../icon/icon';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../theme/theme';
import { LayoutContext } from './layout-api';

export interface ILayoutSider {
  navigation?: JSX.Element | JSX.Element;
  subNavigation?: JSX.Element | JSX.Element;
}

const LayoutSider: React.FunctionComponent<ILayoutSider> = (props) => {
  const { navigation, subNavigation } = props;

  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _layoutSiderCSS = css`
    overflow: hidden;
    position: relative;
    transition: 0.4s ease all;
    transform: translateX(0);
    height: 100%;
    z-index: 1;
    opacity: 1;

    [data-loading='true'] & {
      transform: translateX(-100%) !important;
      opacity: 0;
      pointer-events: none;
    }

    [data-min~='1100'] [data-sider-state='normal'] & {
      width: ${_theme('sider-width')};
    }

    [data-max~='1100'] [data-sider-state='normal'] & {
      width: ${_theme('sider-width-collapsed')};
    }

    [data-sider-state='collapsed'] & {
      width: ${_theme('sider-width-collapsed')};
    }

    [data-min~='1100'] [data-sider-state='expanded'] & {
      width: ${_theme('sider-width-expanded')};
    }

    [data-max~='1100'] [data-sider-state='expanded'] & {
      width: ${_theme('sider-width-collapsed')};
      overflow: visible;
      z-index: 3;
    }

    [data-max~='480'] & {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    [data-max~='480'] [data-sider-state='normal'] & {
      width: ${_theme('sider-width')};
    }

    [data-max~='480'] [data-sider-state='collapsed'] & {
      width: ${_theme('sider-width-collapsed')};
    }

    [data-max~='480'] [data-sider-state='expanded'] & {
      width: ${_theme('sider-width')};
      z-index: 0;
    }

    [data-max~='480']
      [data-sider-state='expanded'][data-sider-hidden='false']
      & {
      z-index: 3;
    }

    [data-max~='480'] [data-sider-state='expanded-wide'] & {
      width: ${_theme('sider-width')};
      z-index: 0;
    }

    [data-sider-state='expanded-wide'] & {
      width: ${_theme('num-sider-width-expanded') + 100}px;
    }
  `;

  return (
    <div className={cn('LayoutSider')} css={_layoutSiderCSS}>
      {navigation}
      {subNavigation}
    </div>
  );
};

LayoutSider.displayName = 'LayoutSider';

export interface ISiderControlProps {
  type?: 'toggle' | 'show' | 'hide';
}

export const SiderControl: React.FunctionComponent<
  ISiderControlProps & React.HTMLAttributes<any>
> = (props) => {
  const _layoutApi = useContext(LayoutContext);
  const _layoutState = _layoutApi.getState();

  let _handler = _layoutApi.toggleMobileSider;
  let _icon = '';

  if (_layoutState.siderHiddenMobile) {
    _icon = 'menu-unfold';
  } else {
    _icon = 'menu-fold';
  }

  if (props.type === 'show') {
    _handler = _layoutApi.showMobileSider;
    _icon = 'menu-unfold';
  } else if (props.type === 'hide') {
    _handler = _layoutApi.hideMobileSider;
    _icon = 'menu-fold';
  }

  return (
    <div onClick={_handler} className={cn('SiderControl', props.className)}>
      <Icon type={_icon} size='large' color='inherit' />
    </div>
  );
};

SiderControl.defaultProps = {
  type: 'toggle',
};

SiderControl.displayName = 'SiderControl';

export default LayoutSider;
