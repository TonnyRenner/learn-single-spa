import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './single-spa.config';

ReactDOM.render((
  <Router>
    <div className="header">
      <Link to="/page1">Link to page1.</Link>
      <br />
      <Link to="/im">Link to im.</Link>
    </div>

    <div id="react-app"></div>
    <div id="im-app"></div>
  </Router>
), document.getElementById('root'));