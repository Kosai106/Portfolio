import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from './portfolio';
import Resume from './resume';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Portfolio} />
      <Route path='/resume' component={Resume} />
    </Switch>
  </main>
);

export default Main;
