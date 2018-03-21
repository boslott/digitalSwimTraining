// Packages
import React from 'react';
import { Switch } from 'react-router-dom';

// Components
import AppliedRoute from './Components/AppliedRoute';

// Pages
import Home from './Pages/Home';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import Courses from './Pages/Courses';
import CourseOverview from './Pages/CourseOverview';
import SingleLesson from './Pages/SingleLesson';
import NotFound from './Pages/NotFound';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute exact path='/' component={Home} props={childProps} />
    <AppliedRoute exact path='/register' component={Register} props={childProps} />
    <AppliedRoute exact path='/signin' component={SignIn} props={childProps} />
    <AppliedRoute exact path='/courses' component={Courses} props={childProps} />
    <AppliedRoute exact path='/courses/:courseSlug' component={CourseOverview} props={childProps} />
    <AppliedRoute path='/courses/:courseSlug/:episodeNum' component={SingleLesson} props={childProps} />
    <AppliedRoute component={NotFound} props={childProps} />
  </Switch>
);