// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CourseCard from '../Components/CourseCard/CourseCard';

class Courses extends Component {
  render() {
    return (
      <div className='page'>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <div className='container my-5'>
          <div className='row flex justify-around relative'>
            <CourseCard
              bgImg='swim101.jpg' 
              skill='General'
              title='Swimming 101'
              lessCnt={12}
            />
            <CourseCard
              bgImg='Freestyler.jpg'
              skill='Freestyle'
              title='Freestyle 101'
              lessCnt={8}
            />
            <CourseCard
              bgImg='backstroker.jpg'
              skill='Backstroke'
              title='What you need to know about Backstroke'
              lessCnt={14}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
} 

export default Courses;