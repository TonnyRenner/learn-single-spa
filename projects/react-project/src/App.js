import React from 'react';

require('./App.css');

class App extends React.PureComponent {
  componentWillUnmount() {
    console.log('App, componentWillUnmount');
  }

  render() {
    return (
      <div className="App">
        <h2 className="inner">react-project, App.js</h2>
      </div>
    );
  }
}

export default App;
