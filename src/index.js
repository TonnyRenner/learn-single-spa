import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

require('./single-spa.config');

ReactDOM.render(<App />, document.getElementById('root'));