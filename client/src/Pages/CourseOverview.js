// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CourseJumbo from '../Components/CourseJumbo/CourseJumbo';
import CourseJumboSubNav from '../Components/CourseJumboSubNav/CourseJumboSubNav';
import CourseLessonsList from '../Components/CourseLessonsList/CourseLessonsList';
import API from '../utils/API';

class Course extends Component {

  state = {
    course: {},
    isLoading: true,
  }

  componentWillMount() {
    this.getCourse();
  }

  getCourse = () => {
    API.getCourse(this.props.match.params.courseSlug)
      .then(course => this.setState({ course: course.data, isLoading: false }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      !this.state.isLoading &&
      <div className='page'>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <CourseJumbo course={this.state.course} />
        <CourseJumboSubNav lessCnt={this.state.course.totalLessons} />
        <CourseLessonsList />
        <Footer />
      </div>
    );
  }
}

export default Course;