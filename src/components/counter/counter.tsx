import {
  AppBar,
  Button,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { mdiEarth } from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';
import { reaction } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { IconSize, LanguageKeys, Languages } from '~common/constants';
import { CounterStore } from '~stores/counter';
import { SettingStore } from '~stores/settings';

import { Classes, styles } from './styles';

/**
 * Component for counter
 */
@inject('counterStore', 'settingStore')
@observer
class Counter extends React.Component<CounterProps> {
  /** Just to mock, set counter now */
  componentDidMount(): void {
    const { counterStore, settingStore, i18n } = this.injectedProps;

    counterStore.setCount(1);

    reaction(
      () => settingStore.locale,
      (locale: string) => i18n.changeLanguage(locale), // tslint:disable-line:no-floating-promises
    );
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

  /** change locale */
  handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.injectedProps.settingStore.setLocale(event.target.value);
  }

  /** Renders languages selectbox items */
  renderLanguageMenuItems = () => (
    Object
      .keys(LanguageKeys)
      .map((value: string) => (
        <MenuItem key={value} value={value}>
          {Languages[value]}
        </MenuItem>
      ))
  )

  /** Renders counter component */
  render(): JSX.Element {
    const {
      t,
      classes,
      counterStore,
      settingStore,
    } = this.injectedProps;

    return (
      <Paper className={classes.container}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.toolbarLeft} variant="h3" color="inherit">
              <i className={classNames('material-icons', classes.headIcon)}>filter_9_plus</i>
              <span className={classes.headTitle}>{t('counterTitle')}</span>
            </Typography>
            <Paper className={classes.toolbarRight}>
              <Typography className={classes.setLanguageLabel} variant="subtitle1">
                <Icon path={mdiEarth} size={IconSize.MD} spin={true} color="#fff" />
              </Typography>
              <Select
                className={classes.languageSelect}
                value={settingStore.locale}
                onChange={this.handleLocaleChange}
              >
                {this.renderLanguageMenuItems()}
              </Select>
            </Paper>
          </Toolbar>
        </AppBar>
        <Paper className={classes.counterBody}>
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
        </Paper>
      </Paper>
    );
  }
}

interface StoreProps {
  /** instance of counter store */
  counterStore: CounterStore;
  /** instance of setting store */
  settingStore: SettingStore;
}

interface StyledComponentProps<ClassName extends string> {
  /** classes provided from material styles */
  classes: ClassNameMap<ClassName>;
}

type InjectedProps = StoreProps & WithTranslation & StyledComponentProps<Classes>;

type CounterProps = Partial<StoreProps> & WithTranslation;

const WrappedCounter = withStyles(styles)(withTranslation()(Counter));

export { WrappedCounter as Counter };
