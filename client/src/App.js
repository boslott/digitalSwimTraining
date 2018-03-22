// Packages
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Routes from './Routes';
import { getCourses } from './actions';

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
    const { getCourses, coursesLoaded, coursesLoadedAt } = this.props;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    if (!coursesLoaded || ((new Date()) - new Date(coursesLoadedAt)) > oneWeek) {
      getCourses();
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

const mapStateToProps = state => ({
  courses: state.courses.courses,
  coursesLoaded: state.courses.coursesLoaded,
  coursesLoadedAt: state.courses.coursesLoadedAt,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCourses,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
