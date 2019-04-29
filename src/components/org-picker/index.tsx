/** @jsx jsx */
import React, { useContext } from 'react';
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import Dropdown from '../dropdown';
import { DropDownProps as AntDropdownProps } from 'antd/lib/dropdown/dropdown';
import { MenuProps as AntMenuProps } from 'antd/lib/menu';

import _ from 'lodash/fp';
import { IOrganization } from '../../models/organization';
import Icon from '../icon';
import { ThemeContext } from '../theme';
import OrgMenu from './org-menu';

export interface IOrgPickerProps {
  organizations: IOrganization[];
  onSettingsClick?: () => void;
  menuProps?: Partial<AntMenuProps>;
}

export const OrgPicker: React.FunctionComponent<IOrgPickerProps & Partial<AntDropdownProps>> = (props) => {
  const { organizations, onSettingsClick, menuProps, ...rest } = props;
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _currentOrg: IOrganization | undefined = _.find('isCurrent', organizations);

  const _orgCSS = css`
    height: ${_theme('sider-width-collapsed')};
    min-width: ${_theme('sider-width')};
    cursor: pointer;
    position: relative;
    border-bottom: 1px solid ${_theme('dark-faded-6')};
    transition: 0.3s ease color, 0.3s ease background-color,
      0.3s ease border-color;
    background-color: ${_theme('light-faded-3')};
    outline: none;
    display: flex;
    align-items: center;

    .OrgLogo {
      display: inline-block;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      margin: 0 20px;
      width: 28px;
      height: 28px;
      filter: grayscale(100%);
      opacity: 0.45;
      transition: 0.3s ease opacity;
    }

    .OrgName {
      width: calc(100% - ${_theme('sider-width-collapsed')});
      display: inline-block;
      font-weight: 700;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      user-select: none;
      transition: 0.3s ease filter;
      line-height: 28px;
    }

    .Icon {
      margin: 0 10px 0 6px;
      color: ${_theme('dark-faded-4')};
      transition: 0.3s ease color;
    }

    &:hover,
    &:focus,
    &:active {
      color: ${_theme('dark-color')};
      background-color: ${_theme('light-color')};
      outline: none;

      .OrgLogo {
        opacity: 0.75;
        filter: grayscale(0);
      }

      .Icon {
        color: ${_theme('primary-color')};
      }
    }

    &:active,
    &:focus {
      color: ${_theme('primary-8')};

      .OrgLogo {
        opacity: 1;
      }

      .Icon {
        color: ${_theme('primary-8')};
      }
    }
  `;

  const _orgMenu = (
    <OrgMenu
      organizations={organizations}
      onSettingsClick={onSettingsClick}
      styles={_orgCSS}
      {...menuProps}
    />
  );
  const _logo = _.get('logo', _currentOrg);
  const _name = _.get('name', _currentOrg);

  return (
    <Dropdown overlay={_orgMenu} placement='bottomLeft' trigger={['click']} {...rest}>
      <div tabIndex={0} className={cn('Org')} css={_orgCSS}>
        <span
          className={cn('OrgLogo')}
          style={{ backgroundImage: `url(${_logo})` }}
        />
        <span className={cn('OrgName')}>{_name as React.ReactText}</span>
        <Icon type='caret-down'/>
      </div>
    </Dropdown>
  );
};

OrgPicker.displayName = 'OrgPicker';
OrgPicker.defaultProps = {
  organizations: [],
  onSettingsClick: undefined,
  menuProps: {},
};

export default OrgPicker;
