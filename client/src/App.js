// Packages
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';

// Components
// import Nav from './Components/Nav/Nav';

// Pages
import Home from './Pages/Home';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/signin' component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
