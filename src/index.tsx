import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/app/app';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept((error) => {
    console.error('Hot module error', error); // tslint:disable-line:no-console
  });
}
