import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

require('./App.css');

function App() {
  return (
    <Router>
      <div className="page-app">
        <div className="page-nav">
          <Link to="/react">点我跳转至React.</Link>
          <br />
          <Link to="/im">点我跳转至IM.</Link>
          <br />
          <Link to="/test">点我跳转至TEST.</Link>
        </div>

        <div className="page-container">
          <div id="react-root"></div>
          <div id="im-root"></div>
          <div id="test-root"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
