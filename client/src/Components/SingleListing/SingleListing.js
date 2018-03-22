// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Component CSS
import './SingleListing.css';

class SingleListing extends Component {
  render() {
    return (
      <div className='row single__listing flex items-center'>
        <div className='col-sm-2 listing__lesson-number'>
          <p>{this.props.lesson.episodeNum}</p>
        </div>
        <Link to={`/courses/${this.props.index}/${this.props.lesson.associatedCourseSlug}/episode${this.props.lesson.episodeNum}`} >
          <div className='col-sm-8 listing__lesson-title'>
            <p>{this.props.lesson.title}</p>
          </div>
        </Link>
        <div className='col-sm-2 listing__lesson-runtime'>
          <p>{this.props.lesson.runtime}</p>
        </div>
      </div>
    );
  }
}

export default SingleListing;