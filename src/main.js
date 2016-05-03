import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import ApiClient from 'universal-json-fetch';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

const client = new ApiClient();
const _browserHistory = useScroll(() => browserHistory)();
const dest = document.getElementById('app');
const store = createStore(_browserHistory, client, window.__data);
const history = syncHistoryWithStore(_browserHistory, store);

let render = (key = null) => {
  const getRoutes = require('./routes');
  const component = (
    <Router
        render={(props) =>
          <ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} />
        }
        history={history}
        key={key} >
      {getRoutes(store)}
    </Router>
  );

  ReactDOM.render(
    <Provider store={store} key="provider">
      {component}
    </Provider>,
    dest
  );
};

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (module.hot) {
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require('redbox-react');
    ReactDOM.render(<RedBox error={error}/>, dest);
  };

  render = () => {
    try {
      renderApp(Math.random());
    } catch (error) {
      renderError(error);
    }
  };
  module.hot.accept(['./routes'], () => render());
}

window.React = React; // enable debugger

render();
