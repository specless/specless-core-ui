/** @jsx jsx */
import React, { useContext } from 'react';
import { css, jsx } from '@emotion/core';
import AntButton from 'antd/lib/button';
import { ButtonProps as AntButtonProps } from 'antd/lib/button/button';
import { ThemeContext } from '../theme';
import 'antd/lib/button/style';

export interface IButtonProps {
  theme?: 'alt' | 'label';
  shadow?: number;
}

export interface IButton {
  Group: typeof AntButton.Group;
}

export const Button: React.FunctionComponent<IButtonProps & AntButtonProps> & IButton = (
  props,
) => {
  const _context = useContext(ThemeContext);
  const _theme = _context.get;

  const shadowStyles = `
			&.shadow-0 {
				box-shadow: ${_theme('shadow-elevation-0')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${_theme('shadow-hover')}
				}
			}

			&.shadow-1 {
				box-shadow: ${_theme('shadow-elevation-1')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${_theme('shadow-hover')};
				}
			}

			&.shadow-2 {
				box-shadow: ${_theme('shadow-elevation-2')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${_theme('shadow-hover')};
				}
			}

			&.shadow-3 {
				box-shadow: ${_theme('shadow-elevation-3')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${_theme('shadow-hover')};
				}
			}

			&.shadow-4 {
				box-shadow: ${_theme('shadow-elevation-4')};
				transition: 0.3s ease all;

				&:hover {
					box-shadow: ${_theme('shadow-hover')};
				}
			}
		`;

  const ButtonStyles = css`
    font-weight: 500;
    text-shadow: none;
    font-family: ${_theme('font-family')};

    &.ant-btn-round {
      border-radius: 50px;
    }

    &.ant-btn-lg {
      font-size: ${_theme('font-size-lg')};
    }

    &.ant-btn-sm {
      font-size: ${_theme('font-size-sm')};
      font-weight: 700;
      //line-height: 1;

      > span {
        position: relative;
        top: -1px;
      }

      .anticon {
        font-size: ${_theme('font-size-base')};
      }
    }
    ${shadowStyles};
  `;

  const AltButtonStyles = css`
    font-weight: 800;
    line-height: 2.4;
    text-shadow: none;
    font-family: ${_theme('font-family-alt')};

    &.ant-btn-lg {
      line-height: 2.7;
      font-size: ${_theme('font-size-lg')};
    }

    &.ant-btn-sm {
      font-size: calc(${_theme('font-size-sm')} + 1px);
      line-height: 1.92;

      .anticon {
        font-size: ${_theme('font-size-base')};
        position: relative;
        top: 1px;
      }
    }

    &.ant-btn-round {
      border-radius: 50px;
    }

    ${shadowStyles};
  `;

  const LabelButtonStyles = css`
    font-weight: ${_theme('label-font-weight')};
    font-size: ${_theme('label-font-size')};
    text-transform: ${_theme('label-text-transform')};
    font-family: ${_theme('label-font-family')};
    letter-spacing: ${_theme('label-letter-spacing')};
    text-shadow: none;

    .anticon {
      font-size: ${_theme('font-size-base')};
      position: relative;
      top: 1px;
    }

    &.ant-btn-sm {
      font-size: calc(${_theme('font-size-sm')} - 2px);
      line-height: 2.3;

      .anticon {
        font-size: ${_theme('font-size-base')};
      }
    }

    &.ant-btn-lg {
      .anticon {
        font-size: ${_theme('font-size-lg')};
        position: relative;
        top: 1px;
      }
    }

    &.ant-btn-round {
      border-radius: 50px;
    }
    ${shadowStyles};
  `;

  let styles = ButtonStyles;
  let shadowClass = 'shadow-none';

  if (props.theme === 'alt') {
    styles = AltButtonStyles;
  } else if (props.theme === 'label') {
    styles = LabelButtonStyles;
  }

  if (props.shadow && props.shadow >= 0) {
    shadowClass = 'shadow-' + props.shadow;
  }

  return (
    <AntButton className={'Button ' + shadowClass} css={styles} {...props}>
      {props.children}
    </AntButton>
  );
};

Button.Group = AntButton.Group;
Button.displayName = 'Button';

export default Button;
