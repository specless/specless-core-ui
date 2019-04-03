import React from 'react';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style';

export interface IConditionalToolTip extends React.HTMLAttributes<any> {
  title?: string;
  type?: string;
}

export const ConditionalTooltip: React.FunctionComponent<
  IConditionalToolTip
> = (props) => {
  const { title, children, type } = props;

  if (!children) {
    return null;
  }

  if (type === 'tile') {
    return (
      <Tooltip placement='right' title={title}>
        {children}
      </Tooltip>
    );
  }
  return children as any;
};

ConditionalTooltip.displayName = 'ConditionalTooltip';

export default ConditionalTooltip;
