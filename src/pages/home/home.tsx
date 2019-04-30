import { CircularProgress, CssBaseline, withStyles } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { AppDrawer } from '~components/app-drawer/app-drawer';
import { Appbar } from '~components/appbar/appbar';
import { Routes } from '~pages/routes/routes';
import { SettingStore } from '~stores/settings';
import { StyledComponentProps } from '~types/styled';

import { Classes, styles } from './styles';

/**
 * Home component, which basically to be shown always!
 */
@inject('settingStore')
@observer
class Home extends React.Component<HomeProps> {
  /** Gives injected props */
  get injectedProps(): InjectedProps {
    return this.props as InjectedProps;
  }

  /** Renders home component */
  render(): JSX.Element {
    const { classes, t, i18n } = this.props;

    return (
      <div className={classes.container}>
        <CssBaseline />
        <Appbar
          t={t}
          i18n={i18n}
        />
        <AppDrawer t={t} i18n={i18n} />
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <React.Suspense fallback={<CircularProgress className={classes.pageLoading} />}>
            <div className={classes.innerWrapper}>
              <Routes />
            </div>
          </React.Suspense>
        </main>
      </div>
    );
  }
}

interface StoreProps {
  /** Settings store */
  settingStore: SettingStore;
}

type InjectedProps = StoreProps;

type HomeProps = Partial<StoreProps> & WithTranslation & StyledComponentProps<Classes>;

const TranslatedHome = withTranslation()(Home);
const StyledHome = withStyles(styles)(TranslatedHome);

export { StyledHome as Home };
