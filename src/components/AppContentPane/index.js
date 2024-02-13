import React, {useState} from 'react';
import SplitPane, {Pane} from 'split-pane-react';
import Content from './../Content';
import classNames from 'classnames';

import 'split-pane-react/esm/themes/default.css';
import './styles.scss';
import {DragbarHandle} from "../Content/tinyBits";

const AppContentPane = () => {
  const [sizes, setSizes] = useState([200, 'auto']);

  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const VerticalDragbarHandle = (index, active) => <DragbarHandle
      index={index}
      active={active}
      orientation='vertical'
      // onClick={() => {
      //   console.log(sizes[index]);
      //   setSizes([sizes[index] === 3 ? 'calc(50% - 1px)' : 3, 'auto'])
      // }}
  />

  return (
    <div className={classNames('app-content-container', sizes[0] === 3 && 'opaque-left-pane-handle')} style={{ height: '100%' }}>
      <SplitPane
        sashRender={ VerticalDragbarHandle }
        resizerSize={7}
        split="vertical"
        sizes={sizes}
        onChange={setSizes}>
        <Pane
          minSize={3}
          maxSize="50%"
        >
          <div style={{ overflow: 'hidden', display: +sizes[0] > 12 ? 'block' : 'none', minWidth: 250 }}>Left Pane</div>
        </Pane>
        <div className="pane-right" style={{ ...layoutCSS }}>
          <Content />
        </div>
      </SplitPane>
    </div>
  );
};

export default AppContentPane;
