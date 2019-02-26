import * as React from 'react';

import * as styles from './app.css';
import * as sass from './app.scss';

/**
 * App start from here
 * Basically it does all base configuration before rendering actual app
 */
export class App extends React.Component {
  /**
   * Renders app
   */
  render(): JSX.Element {
    return (
      <div className={`${styles.content} ${sass.content}`}>
        <span className={`${sass.something}`}>Hello !..</span>
      </div>
    );
  }
}
