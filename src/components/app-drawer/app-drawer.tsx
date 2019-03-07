import {
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import { ListItemProps } from '@material-ui/core/ListItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import { mdiCounter } from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { Link, LinkProps } from 'react-router-dom';
import { IconSize } from '~common/constants';
import { SettingStore } from '~stores/settings';
import { StyledComponentProps } from '~types/styled';

import { Classes, styles } from './styles';

/**
 * Side Drawer component
 */
@inject('settingStore')
@observer
class AppDrawer extends React.Component<AppDrawerProps> {
  /** Gives injected props */
  get injectedProps(): InjectedProps {
    return this.props as InjectedProps;
  }

  /** Drawer links */
  getLinks(): Links[] {
    const { classes, t: translate } = this.props;

    return [
      { path: '/', icon: <HomeIcon className={classes.drawerLinkIcon} />, text: translate('pageHeadTitle.home') },
      {
        path: '/counter',
        icon: <Icon className={classes.drawerLinkIcon} path={mdiCounter} size={IconSize.MD} />,
        text: translate('pageHeadTitle.counter'),
      },
    ];
  }

  /** Renders side drawer list items with icons and text */
  rednerDrawerListItems = (hideOnClick?: boolean): JSX.Element[] => (
    this
      .getLinks()
      .map((link: Links) => (
        <ListItem
          button={true}
          component={(props: ListItemProps & Partial<LinkProps>) => <Link to={link.path} {...props} />}
          key={link.path}
          onClick={hideOnClick ? this.handleDrawerClose : undefined}
        >
          <ListItemIcon>{link.icon}</ListItemIcon>
          <ListItemText primary={link.text} />
        </ListItem>
      ))
  )

  /** Open drawer */
  handleDrawerOpen = (): void => {
    this.injectedProps.settingStore.openDrawer();
  }

  /** Closes drawer */
  handleDrawerClose = (): void => {
    this.injectedProps.settingStore.closeDrawer();
  }

  /** Renders app drawer */
  render(): JSX.Element {
    const { settingStore } = this.injectedProps;
    const { classes, theme } = this.props;

    return (
      <section>
        <Hidden smUp={true} implementation="css">
          <Drawer
            className={classes.mobileDrawer}
            open={settingStore.isDrawerOpen}
            onClose={this.handleDrawerClose}
            variant="temporary"
            anchor={theme && theme.direction === 'rtl' ? 'right' : 'left'}
          >
            <List>
              {this.rednerDrawerListItems(true)}
            </List>
          </Drawer>
        </Hidden>
        <Hidden xsDown={true} implementation="css">
          <Drawer
            variant="permanent"
            open={settingStore.isDrawerOpen}
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: settingStore.isDrawerOpen,
              [classes.drawerClose]: !settingStore.isDrawerOpen,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: settingStore.isDrawerOpen,
                [classes.drawerClose]: !settingStore.isDrawerOpen,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme && theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              {this.rednerDrawerListItems()}
            </List>
          </Drawer>
        </Hidden>
      </section>
    );
  }
}

interface Links {
  /** Route path */
  path: string;
  /** Icon component */
  icon: JSX.Element;
  /** Link text */
  text: string;
}

interface StoreProps {
  /** instance of Settings store */
  settingStore: SettingStore;
}

type InjectedProps = StoreProps;

type AppDrawerProps = WithTranslation & Partial<StoreProps> & StyledComponentProps<Classes>;

const StyledAppDrawer = withStyles(styles)(AppDrawer);

export { StyledAppDrawer as AppDrawer };
