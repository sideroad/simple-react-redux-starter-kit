import { createStore as _createStore, applyMiddleware } from 'redux';
import createMiddleware from './clientMiddleware';
import { routerMiddleware } from 'react-router-redux';

export default function createStore(history, client, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [createMiddleware(client), reduxRouterMiddleware];

  let finalCreateStore;
  finalCreateStore = applyMiddleware(...middleware)(_createStore);

  const reducer = require('./reducers');
  const store = finalCreateStore(reducer, data);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  return store;
}
