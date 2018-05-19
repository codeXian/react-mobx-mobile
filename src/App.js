import React, { Component } from 'react';
import styles from './App.css';
import GlobalTabBar from './components/GlobalTabBar';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <GlobalTabBar {...this.props} />
      </div>
    );
  }
}

export default App;
