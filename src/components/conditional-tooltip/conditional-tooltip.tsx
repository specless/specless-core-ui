import { Tooltip } from 'antd';
import React from 'react';

export interface IConditionalToolTip {
  title?: string;
  type?: string;
}

export const ConditionalTooltip: React.FunctionComponent<
  IConditionalToolTip
> = (props) => {
  const { title, children, type } = props;

  if (type === 'tile') {
    return (
      <Tooltip placement='right' title={title}>
        {children}
      </Tooltip>
    );
  }
  return <div>{children}</div>;
};
