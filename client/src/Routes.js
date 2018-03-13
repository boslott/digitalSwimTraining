// Packages
import React from 'react';
import { Switch } from 'react-router-dom';

// Components
import AppliedRoute from './Components/AppliedRoute';

// Pages
import Home from './Pages/Home';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import NotFound from './Pages/NotFound';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute exact path='/' component={Home} props={childProps} />
    <AppliedRoute exact path='/register' component={Register} props={childProps} />
    <AppliedRoute exact path='/signin' component={SignIn} props={childProps} />
    <AppliedRoute component={NotFound} props={childProps} />
  </Switch>
);