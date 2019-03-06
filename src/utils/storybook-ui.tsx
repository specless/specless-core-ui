import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Padding from '../components/padding/padding';
import 'react-resizable/css/styles.css';

export interface IStorybookUI {
  type?: 'resizable' | 'viewport';
}

const StorybookUI: React.FC<IStorybookUI> = (props) => {
  const { children, type } = props;
  const [_initialWidth, _setInitialWidth] = useState<number>(0);
  const [_initialHeight, _setInitialHeight] = useState<number>(0);
  useEffect(() => {
    _setInitialWidth(window.innerWidth);
    _setInitialHeight(window.innerHeight);
  }, []);
  if (type === 'resizable') {
    return (
      <Padding size='lg'>
        <ResizableBox
          axis='x'
          width={_initialWidth - 70}
          height={_initialHeight}>
          <Card>{children}</Card>
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
