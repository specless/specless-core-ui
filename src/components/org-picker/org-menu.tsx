/** @jsx jsx */
import React, { useContext } from 'react';
import cn from 'classnames';
import { css, jsx, SerializedStyles } from '@emotion/core';
import { Menu } from 'antd';
import { MenuProps as AntMenuProps } from 'antd/lib/menu';
import { IOrganization } from '../../models/organization';
import Button from '../button/button';

import { ThemeContext } from '../theme/theme';
import _ from 'lodash/fp';
import { IOrgPickerProps } from './org-picker';

export interface IOrgMenuProps extends Pick<IOrgPickerProps, 'organizations' | 'onSettingsClick'> {
  styles?: SerializedStyles;
}

export const OrgMenu: React.FunctionComponent<IOrgMenuProps & AntMenuProps> = (props) => {
  const { organizations, onSettingsClick, styles, ...rest } = props;
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const _orgMenuItemCSS = css`
    min-width: calc(100% - 12px);
    height: ${_theme('sider-width-collapsed')} !important;
    margin: 0px !important;
    &:hover,
    &:focus,
    &:active {
      background-color: ${_theme('dark-faded-7')};
      .OrgLogo {
        opacity: 1 !important;
      }
    }

    .OrgLogo {
      opacity: 0.75;
      filter: grayscale(0) !important;
    }
  `;
  const _orgMenuCSS = css`
    padding: 0; 
    position: relative;
    left: 6px;
    width: calc(100% - 12px);
    max-height: calc(100vh - 74px);
    overflow-x: hidden;
    overflow-y: auto;

    .Org {
      &:last-child {
        border-bottom: none;
      }
    }
  `;

  const _orgMenuDividerCSS = css`
    margin: 0;
  `;

  const _orgOptionsCSS = css`
    padding: 10px;
    background-color: ${_theme('light-color')};
  `;

  const _renderOrgMenuItems = (organization: IOrganization[]) => {
    return _.pipe(
      _.toPairs,
      _.map(([i, org]: [string, IOrganization]) => {
        if (org.isCurrent) {
          return null;
        }
        return (
          <Menu.Item
            key={org.id || org.name}
            className={cn('Org')}
            css={[styles, _orgMenuItemCSS]}>
            <span
              className={cn('OrgLogo')}
              style={{ backgroundImage: `url(${org.logo})` }}
            />
            <span className='OrgName'>{org.name}</span>
          </Menu.Item>
        );
      }),
    )(organization);
  };

  return (
    <Menu css={_orgMenuCSS} {...rest}>
      <Menu.Item className={cn('OrgOptions')} css={_orgOptionsCSS}>
        <Button
          icon='setting'
          htmlType='button'
          block
          onClick={onSettingsClick}>
          Organization Settings
        </Button>
      </Menu.Item>
      <Menu.Divider css={_orgMenuDividerCSS}/>
      {_renderOrgMenuItems(organizations)}
    </Menu>
  );
};

OrgMenu.displayName = 'OrgMenu';
OrgMenu.defaultProps = {
  organizations: [],
  onSettingsClick: undefined,
  styles: undefined,
};

export default OrgMenu;
