import React from 'react';

import { loadJS } from '../../common/utils';

class App extends React.PureComponent {
  async componentDidMount() {
    await loadJS('http://localhost:8002/static/js/bundle.js').then(() => {
      console.log('test, load js end.', window.ReactApp.default);
      new window.ReactApp.default(this.testContainer).start();
    });
  }

  render() {
    return (
      <div ref={(node) => { this.testContainer = node; }}></div>
    );
  }
}

export default App;