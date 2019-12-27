import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
class Main {
  constructor(ele) {
    this.ele = ele;
  }

  start() {
    ReactDOM.render(<App />, this.ele);
  }
}

export default Main;
