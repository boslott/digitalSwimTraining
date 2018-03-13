// Packages
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Routes from './Routes';

class App extends Component {

  state = {
    isAuthenticated: false,
    isAuthenticating: true
  }

  componentWillMount() {
    if(localStorage.getItem('token')) {
      this.setState({ isAuthenticated: true });
      this.setState({ isAuthenticating: false });
    }
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      // !this.state.isAuthenticating &&
      <Router>
        <div className="App">
          {/* <h3>{this.state.isAuthenticated ? 'yes' : 'no'}</h3> */}
          <Routes childProps={childProps} />
        </div>
      </Router>
    );
  }
}

export default App;
