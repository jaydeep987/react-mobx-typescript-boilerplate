import {
  Button,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { PageContent } from '~components/page-content/page-content';
import { PageHeader } from '~components/page-header/page-header';
import { CounterStore } from '~stores/counter';
import { SettingStore } from '~stores/settings';
import { StyledComponentProps } from '~types/styled';

import { Classes, styles } from './styles';

/**
 * Component for counter
 */
@inject('counterStore', 'settingStore')
@observer
class Counter extends React.Component<CounterProps> {
  /** Just to mock, set counter now. It will reset counter every time component mounts */
  componentDidMount(): void {
    const { counterStore } = this.injectedProps;

    counterStore.setCount(1);
  }

  /** Gives injected props */
  get injectedProps(): InjectedProps {
    return this.props as InjectedProps;
  }

  /** Increment when click on increment button */
  handleIncrement = (): void => {
    this.injectedProps.counterStore.increment();
  }

  /** Decrement when click on decrement button */
  handleDecrement = (): void => {
    this.injectedProps.counterStore.decrement();
  }

  /** Renders counter component */
  render(): JSX.Element {
    const {
      t,
      classes,
      counterStore,
    } = this.injectedProps;

    return (
      <div className={classes.container}>
        <PageHeader headerTitle={t('pageHeadTitle.counter')} />
        <PageContent>
          <div className={classes.counterBody}>
            <Button
              className={classes.incrementBtn}
              variant="contained"
              color="secondary"
              value="+"
              onClick={this.handleIncrement}
            >
              +
            </Button>
            <Typography variant="h4">{counterStore.count}</Typography>
            <Button
              className={classes.decrementBtn}
              variant="contained"
              color="secondary"
              value="-"
              onClick={this.handleDecrement}
            >
              -
            </Button>
          </div>
        </PageContent>
      </div>
    );
  }
}

interface StoreProps {
  /** instance of counter store */
  counterStore: CounterStore;
  /** instance of setting store */
  settingStore: SettingStore;
}

type InjectedProps = StoreProps & WithTranslation & StyledComponentProps<Classes>;

type CounterProps = Partial<StoreProps> & WithTranslation & Partial<RouteComponentProps>;

const WrappedCounter = withStyles(styles)(withTranslation()(Counter));

export { WrappedCounter as Counter };
