import React from 'react';
import AppContentPane from './components/AppContentPane';

import './styles.scss';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="demo">
      <div className="header">
        <h1>Split Pane React Demo</h1>
        <h6><a href='https://www.npmjs.com/package/split-pane-react' target='_blank'>www.npmjs.com/package/split-pane-react</a></h6>
      </div>
      <div className="content">
        <AppContentPane />
      </div>
      <div className="footer">
        &copy; {currentYear} | sImo LTD | All rights reserved.
      </div>
    </div>
  );
}
