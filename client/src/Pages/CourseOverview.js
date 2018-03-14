// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CourseJumbo from '../Components/CourseJumbo/CourseJumbo';

class Course extends Component {
  render() {
    return (
      <div>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <CourseJumbo />
        <Footer />
      </div>
    );
  }
}

export default Course;