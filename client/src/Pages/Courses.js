// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CourseCard from '../Components/CourseCard/CourseCard';
import API from '../utils/API';

class Courses extends Component {

  state = {
    courses: [],
    isLoading: true,
  }

  componentWillMount() {
    this.getCourses();
  }

  getCourses = async () => {
    await API.getCourses()
      .then(courses => {
          let loadedCourses = [];
          courses.data.map(course => (
          loadedCourses.push(course)
        ));
        this.setState({ courses: loadedCourses, isLoading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      !this.state.isLoading &&
      <div className='page'> 
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <div className='container my-5'>
          <div className='row flex justify-around relative'>
            <CourseCard
              course={this.state.courses[0]}
            />
            <CourseCard
              course={this.state.courses[1]}
            />
            <CourseCard
              course={this.state.courses[2]}
            />
          </div>
        </div>
        <Footer />
        </div>
    );
  }
} 

export default Courses;