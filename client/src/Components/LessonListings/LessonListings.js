// Packages
import React, { Component } from 'react';

// Component CSS
import './LessonListings.css';

// Components
import SingleListing from '../SingleListing/SingleListing';

class LessonListings extends Component {
  render() {
    return (
      <div className='container lesson-listings'>
        <div className='row listings__course-title'>
          <p>Freestyle 101</p>
        </div>
        <SingleListing lessNum='01'/>
        <SingleListing lessNum='02'/>
        <SingleListing lessNum='03'/>
        <SingleListing lessNum='04'/>
        <SingleListing lessNum='05'/>
      </div>
    );
  }
}

export default LessonListings;