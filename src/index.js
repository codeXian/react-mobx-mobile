import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { APP } from './utils/config';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to={`/${APP}`} />} />
      <Route path={`/${APP}`} component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
