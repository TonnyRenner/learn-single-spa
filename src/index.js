import React from 'react';
import ReactDOM from 'react-dom';
import SingleSpaReact from 'single-spa-react';

import App from './App';

require('./index.css');

// const App = () => {
//   return <h1>Test for single-spa.</h1>
// }

const reactLifecycles = SingleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("root")
});


export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;