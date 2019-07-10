import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import history from './history';
import { HashRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter history={history}>
    <App />
  </HashRouter>,

  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
