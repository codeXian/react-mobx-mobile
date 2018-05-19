import { TabBar } from 'antd-mobile';
import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import { GLOBALTABBAR, INDEX, TAB, TabBarArr } from './config.js';
import styles from './index.css';
import Loading from '../Loading';
import { firstUpperCase, getUrlIsFromTabBar } from '../../utils';
import { APP } from '../../utils/config';

const Item = TabBar.Item;

const Icon = src => <div className={styles[`icon-${src}`]} />;

export default class GlobalTabBar extends PureComponent {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const IsUrlFromTabBar = getUrlIsFromTabBar(location.pathname, TabBarArr);
    this.state = {
      data: [...GLOBALTABBAR],
      selectedTab: IsUrlFromTabBar ? IsUrlFromTabBar + TAB : INDEX + TAB,
    };
  }
  componentDidMount() {
    this.props.history.replace(
      `/${APP}/${this.state.selectedTab.slice(0, -3)}`,
    );
  }
  renderContent(routerName) {
    const router = `${firstUpperCase(routerName)}Page`;
    const LoadableComponent = Loadable({
      loader: () => import(`../../routes/${router}`),
      loading: Loading,
    });
    return (
      <Route path={`/${APP}/${routerName}`} component={LoadableComponent} />
    );
  }
  render() {
    const { history } = this.props;
    return (
      <div className={styles.TabBarWrapper}>
        <TabBar
          unselectedTintColor="#71777c"
          tintColor="#007fff"
          barTintColor="#f4f5f5"
        >
          {this.state.data.map(item => (
            <Item
              title={item.title}
              key={item.key}
              icon={Icon(item.key)}
              selectedIcon={Icon(item.active)}
              selected={this.state.selectedTab === item.selectedTab}
              onPress={() => {
                this.setState({ selectedTab: item.selectedTab }, () => {
                  history.replace(`/${APP}/${item.key}`);
                });
              }}
            >
              {this.renderContent(item.key)}
            </Item>
          ))}
        </TabBar>
      </div>
    );
  }
}
