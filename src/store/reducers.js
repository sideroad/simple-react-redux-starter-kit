import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import counter from '../modules/counter';
import logger from '../modules/logger';
import {reducer as form} from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form,
  counter,
  logger
});
