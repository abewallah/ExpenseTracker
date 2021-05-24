import { Switch, Route } from 'react-router-dom';
import React from 'react';

import MainContainer from '../container/MainContainer';
import LandingPage from '../pages/LandingPage';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/homepage/:id' component={MainContainer} />

      {/* <Route path='/register' component={RegisterPage} /> */}
      {/* <Route path='/login' component={LoginPage} /> */}
      {/* <Route path='/profile' component={ProfilePage} /> */}
      {/* <Route exact path='/about' component={AboutPage} /> */}
    </Switch>
  );
}

export default Routes;
