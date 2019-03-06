import * as loglevel from 'loglevel';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '~pages/app/app';

import { initI18Next } from './i18n/i18n';

/** initialize i18n */
initI18Next()
  .catch((error) => {
    loglevel.error('Error in loading i18n', error);
  });

/** Render app to root */
ReactDOM.render(<App />, document.getElementById('root'));

/** Set hot module replacement */
if (module.hot) {
  module.hot.accept((error) => {
    loglevel.error('Hot module error', error);
  });
}
