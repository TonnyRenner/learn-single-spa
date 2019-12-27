import React from 'react';

import { loadJS } from '../../common/utils';

class App extends React.PureComponent {
  async componentDidMount() {
    await loadJS('http://im.uat1.rs.com/v2/static/js/index.js').then(() => {
      console.log('im, load js end.', window.RSWebIM);
      new window.RSWebIM(this.imContainer).start();
    });
  }

  render() {
    return (
      <div ref={(node) => { this.imContainer = node; }}></div>
    );
  }
}

export default App;