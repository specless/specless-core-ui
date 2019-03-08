import { Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Padding from '../components/padding/padding';
import 'react-resizable/css/styles.css';
import _ from 'lodash/fp';
export interface IStorybookUI {
  type?: 'resizable' | 'viewport';
}

const StorybookUI: React.FC<IStorybookUI> = (props) => {
  const { children, type } = props;
  const _cardDomRef = useRef<Card>(null);
  const [_initialWidth, _setInitialWidth] = useState<number>(0);
  const [_initialHeight, _setInitialHeight] = useState<number>(0);
  useEffect(() => {
    if (!_cardDomRef.current) {
      return;
    }
    const _card = _.getOr(
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      'current.container',
      _cardDomRef
    );
    _setInitialWidth(_card.clientWidth);
    _setInitialHeight(_card.clientHeight);
  }, []);
  if (type === 'resizable') {
    return (
      <Padding size='lg'>
        <ResizableBox
          axis='x'
          width={_initialWidth - 70}
          height={undefined as any}>
          <Card ref={_cardDomRef}>{children}</Card>
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
