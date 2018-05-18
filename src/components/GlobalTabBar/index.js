import { TabBar } from "antd-mobile";
import React, { PureComponent } from "react";
import Loadable from "react-loadable";
import { GLOBALTABBAR, INDEX, TAB } from "./config.js";
import styles from "./index.css";
import Loading from "../Loading";

const Item = TabBar.Item;
const LoadableComponent = Loadable({
  loader: () => import("../../routes/IndexPage"),
  loading: Loading
});

const Icon = src => <div className={styles[`icon-${src}`]} />;

export default class GlobalTabBar extends PureComponent {
  state = {
    data: [...GLOBALTABBAR],
    selectedTab: INDEX + TAB
  };
  render() {
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
                this.setState({ selectedTab: item.selectedTab });
              }}
            >
              <LoadableComponent />
            </Item>
          ))}
        </TabBar>
      </div>
    );
  }
}
