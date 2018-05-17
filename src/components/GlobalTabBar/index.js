import { TabBar } from "antd-mobile";
import React, { PureComponent } from "react";
import { GLOBALTABBAR } from "./config.js";
import styles from "./index.css";

const Item = TabBar.Item;

const Icon = src => <div className={styles[`icon-${src}`]} />;

export default class GlobalTabBar extends PureComponent {
  state = {
    data: [...GLOBALTABBAR],
    selectedTab: "indexTab"
  };
  render() {
    return (
      <div className={styles.TabBarWrapper}>
        <TabBar
          unselectedTintColor="#71777c"
          tintColor="#007fff"
          barTintColor="white"
        >
          {this.state.data.map(item => (
            <Item
              title={item.title}
              key={item.key}
              icon={Icon(item.key)}
              selectedIcon={Icon(item.active)}
              selected={item.selected}
              onPress={() => {
                this.setState({ selectedTab: item.selectedTab });
              }}
            />
          ))}
        </TabBar>
      </div>
    );
  }
}
