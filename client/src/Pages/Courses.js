// Packages
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CourseCard from '../Components/CourseCard/CourseCard';

class Courses extends Component {

  componentWillMount() {
    console.log('courses state', this.props.courses)
  }

  render() {
    const { courses } = this.props;
    return (
      <div className='page'> 
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <div className='container my-5'>
          <div className='row flex justify-around relative'>
            <CourseCard
              course={courses[0]}
              index={0}
            />
            <CourseCard
              course={courses[1]}
              index={1}
            />
            <CourseCard
              course={courses[2]}
              index={2}
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

export default connect(mapStateToProps, null)(Courses);
