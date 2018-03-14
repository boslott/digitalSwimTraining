// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// Component CSS
import './CourseJumboSubNav.css';

class CourseJumboSubNav extends Component {
  render() {
    return (
      <div className='container-fluid sub-nav__bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 col-md-3 sub-nav__button'>
              <Link to='/courses'>
                <p>← Back To All Courses</p>
              </Link>
            </div>
            <div className='col-sm-4 offset-sm-4 col-md-3 offset-md-6 sub-nav__lesson-count'>
              <div className='sub-nav__lesson-play'>
                <FontAwesomeIcon icon='play-circle' size='lg'/>
              </div>
              <p>12 Lessons</p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseJumboSubNav;