import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

declare global {
  interface NodeModule {
    hot: {
      accept: (render: Function) => any;
    } | undefined | null;
  }
}

export function render() {
  // tslint:disable-next-line:no-require-imports
  let App = require('./app').App;
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('App'));
}

if (module.hot) { module.hot.accept(render); }