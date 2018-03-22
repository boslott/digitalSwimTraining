// Packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CourseJumbo from '../Components/CourseJumbo/CourseJumbo';
import CourseJumboSubNav from '../Components/CourseJumboSubNav/CourseJumboSubNav';
import CourseLessonsList from '../Components/CourseLessonsList/CourseLessonsList';
// import API from '../utils/API';
import { getCourse } from '../actions';

class Course extends Component {

  state = {
    currentCourse: {},
    // lessons: [{}],
    // isLoading: true,
  }

  componentWillMount() {
    this.props.getCourse(this.props.match.params.courseSlug);
    console.log('overview will mount state', this.props);
    // this.setState({ currentCourse: this.props.courses[this.props.match.params.index]});
  }
  
  componentDidMount() {
    console.log('course overview did mount state', this.props);
  }

  // getCourse = () => {
  //   API.getCourse(this.props.match.params.courseSlug)
  //     .then(course => this.setState({ course: course.data, lessons: course.data.lessons, isLoading: false }))
  //     .catch(err => console.log(err));
  // }

  render() {
    const { currentCourse } = this.props;
    return (
      // !this.state.isLoading &&
      <div className='page'>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <CourseJumbo
          course={currentCourse}
          index={this.props.match.params.index}
        />
        <CourseJumboSubNav lessCnt={currentCourse.totalLessons} />
        <CourseLessonsList
          lessons={currentCourse.lessons}
          index={this.props.match.params.index}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
  currentCourse: state.courses.currentCourse,
  courseLoaded: state.courses.courseLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCourse,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Course);