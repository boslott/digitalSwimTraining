// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CourseJumbo from '../Components/CourseJumbo/CourseJumbo';
import CourseJumboSubNav from '../Components/CourseJumboSubNav/CourseJumboSubNav';
import CourseLessonsList from '../Components/CourseLessonsList/CourseLessonsList';

class Course extends Component {
  render() {
    return (
      <div className='page'>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <CourseJumbo />
        <CourseJumboSubNav />
        <CourseLessonsList />
        <Footer />
      </div>
    );
  }
}

export default Course;