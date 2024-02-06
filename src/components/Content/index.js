import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';

import 'split-pane-react/esm/themes/default.css';
import './styles.scss';

const Content = () => {
  const [sizes, setSizes] = useState([100, '30%', 'auto']);

  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="content-pane" style={{ height: '100%', width: '100%' }}>
      <SplitPane
        resizerSize={7}
        split="horizontal"
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane className="bb border-color-light" minSize={50} maxSize="50%">
          <div style={{ ...layoutCSS }}>Right Pane #1</div>
        </Pane>
         <Pane className="bb border-color-light" minSize={50}>
          <div style={{ ...layoutCSS }}>Right Pane #2</div>
        </Pane>
        <Pane className="bb border-color-light" minSize={50}>
          <div style={{ ...layoutCSS }}>Right Pane #3</div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default Content;
