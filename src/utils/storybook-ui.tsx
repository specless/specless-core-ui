import { Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Padding from '../components/padding/padding';
import 'react-resizable/css/styles.css';
import _ from 'lodash/fp';
export interface IStorybookUI {
  type?: 'resizable' | 'viewport';
}

export const StorybookUI: React.FC<IStorybookUI> = (props) => {
  const { children, type } = props;
  const _ref = useRef<Card>(null);
  const [_width, _setWidth] = useState<number>(window.innerWidth);
  const [_height, _setHeight] = useState<number>(window.innerHeight);
  useEffect(() => {
    const _card = _.get('current.container', _ref);
    if (!_card) {
      return;
    }
    _setWidth(_card.clientWidth);
    _setHeight(_card.clientHeight);
  }, [_ref.current]);
  if (type === 'resizable') {
    return (
      <Padding size='lg'>
        <ResizableBox axis='x' width={_width - 70} height={_height}>
          <Card ref={_ref}>{children}</Card>
        </ResizableBox>
      </Padding>
    );
  } else if (type === 'viewport') {
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        {children}
      </div>
    );
  } else {
    return (
      <Padding size='lg'>
        <Card>{children}</Card>
      </Padding>
    );
  }
};

export default StorybookUI;
