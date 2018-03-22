// Packages
import React, { Component } from 'react';

// Component CSS
import './LessonListings.css';

// Components
import SingleListing from '../SingleListing/SingleListing';

class LessonListings extends Component {
  render() {
    const listing = this.props.course.lessons.map((lesson, index) => (
      <SingleListing key={index} lesson={lesson} index={this.props.index}  />
    ))
    return (
      <div className='container lesson-listings'>
        <div className='row listings__course-title'>
          <p>{this.props.course.title}</p>
        </div>
        {listing}
      </div>
    );
  }
}

export default LessonListings;