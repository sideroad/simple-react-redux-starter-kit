import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {
    App,
    HomeView,
    CounterContainer,
    NotFound,
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App} >
      { /* Home (main) route */ }
      <IndexRoute component={HomeView} />

      <Route path="counter" component={CounterContainer}/>
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
