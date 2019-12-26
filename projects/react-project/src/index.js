import React from 'react';
import ReactDOM from 'react-dom';
import SingleSpaReact from 'single-spa-react';

import App from './App';

require('./index.css');

// 判断当前页面使用singleSpa应用,不是就渲染
if (!window.singleSpaNavigate) {
  console.log('!single');
  ReactDOM.render(<App />, document.getElementById('root'));
}

const reactLifecycles = SingleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("react-app")
});

console.log('reactLifecycles', reactLifecycles);

export const bootstrap = [
  reactLifecycles.bootstrap
];

export const mount = [
  reactLifecycles.mount
];

export const unmount = [
  reactLifecycles.unmount
];
