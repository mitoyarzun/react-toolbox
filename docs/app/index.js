import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './components/layout/home';
import Install from './components/layout/install';
import Main from './components/layout/main';

const history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/install" component={Install} />
      <Route path="/components/:component?" component={Main} />
    </Switch>
  </Router>
), document.getElementById('app'));
