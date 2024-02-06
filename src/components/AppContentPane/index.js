import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import Content from './../Content';
import classNames from 'classnames';

import 'split-pane-react/esm/themes/default.css';
import './styles.scss';

const AppContentPane = () => {
  const [sizes, setSizes] = useState([200, 'auto']);

  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  console.log(sizes[0]);

  return (
    <div className="app-content-container" style={{ height: '100%' }}>
      <SplitPane
        resizerSize={7}
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane
          className={classNames(
            'border-color-light',
            'p1',
            +sizes[0] > 3 && 'br'
          )}
          minSize={3}
          maxSize="50%"
        >
          <div style={{ overflow: 'hidden', display: 'block' }}>Pane Left</div>
        </Pane>
        <div className="pane-right" style={{ ...layoutCSS }}>
          <Content />
        </div>
      </SplitPane>
    </div>
  );
};

export default AppContentPane;
