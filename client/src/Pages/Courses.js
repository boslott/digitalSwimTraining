// Packages
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CourseCard from '../Components/CourseCard/CourseCard';
import { getCourses } from '../actions';

class Courses extends Component {

  // state = {
  //   courses: [],
  //   isLoading: true,
  // }

  componentWillMount() {
    this.props.getCourses();
  }

  render() {
    const { courses } = this.props;
    return (
      // !this.state.isLoading &&
      <div className='page'> 
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <div className='container my-5'>
          <div className='row flex justify-around relative'>
            <CourseCard
              course={courses[0]}
            />
            <CourseCard
              course={courses[1]}
            />
            <CourseCard
              course={courses[2]}
            />
          </div>
        </div>
        <Footer />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
