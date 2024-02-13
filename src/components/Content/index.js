import React, {useState} from 'react';
import SplitPane, {Pane} from 'split-pane-react';

import 'split-pane-react/esm/themes/default.css';

import './styles.scss';
import {DragbarHandle} from "./tinyBits";

const Content = () => {
  const [sizes, setSizes] = useState([100, '30%', 'auto']);

  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const HorizontalDragbarHandle = (index, active) => <DragbarHandle
      index={index}
      active={active}
      orientation='horizontal'
      // onClick={() => {
      //     console.log(sizes[index]);
      //     setSizes((() => {
      //         if (index === 0) {
      //             return [sizes[index] === 50 ? 'calc(50% - 1px)' : 50, 'auto', 'auto']
      //         } else if (index === 1) {
      //             return ['auto', sizes[index] === 50 ? 'calc(50% - 1px)' : 50, 'auto']
      //         }
      //
      //         return ['auto', 'auto', sizes[index] === 50 ? 'calc(50% - 1px)' : 50]
      //     })())
      // }}
      // onDrag={e => {
      //     e.preventDefault();
      //     e.stopImmediatePropagation();
      // }}
  />

  return (
    <div className="content-pane" style={{ height: '100%', width: '100%', display: 'block' }}>
      <SplitPane
        sashRender={ (index, active) => HorizontalDragbarHandle(index, active) }
        resizerSize={7}
        split="horizontal"
        sizes={sizes}
        onChange={setSizes}>
        <Pane minSize={50} maxSize="50%">
          <div style={{ ...layoutCSS }}>Right Pane #1</div>
        </Pane>
         <Pane minSize={50}>
          <div style={{ ...layoutCSS }}>Right Pane #2</div>
        </Pane>
        <Pane minSize={50}>
          <div style={{ ...layoutCSS }}>Right Pane #3</div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default Content;
