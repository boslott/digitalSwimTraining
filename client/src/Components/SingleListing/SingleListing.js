// Packages
import React, { Component } from 'react';

// Component CSS
import './SingleListing.css';

class SingleListing extends Component {
  render() {
    return (
      <div className='row single__listing flex items-center'>
        <div className='col-sm-2 listing__lesson-number'>
          <p>{this.props.lessNum}</p>
        </div>
        <div className='col-sm-8 listing__lesson-title'>
          <p>The Four Parts To The Freestyle Pull</p>
        </div>
        <div className='col-sm-2 listing__lesson-runtime'>
          <p>12:46</p>
        </div>
      </div>
    );
  }
}

export default SingleListing;