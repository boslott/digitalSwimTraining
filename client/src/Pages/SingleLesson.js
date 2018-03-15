// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import LessonJumbo from '../Components/LessonJumbo/LessonJumbo';
import LessonComments from '../Components/LessonComments/LessonComments';
import LessonListings from '../Components/LessonListings/LessonListings';

class SingleLesson extends Component {
  render() {
    return (
      <div className='page'>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <div className='container-fluid player__bg bg-black'>
          <div className='container'>
            <div className='row player-row'>
              <VideoPlayer />
            </div>
          </div>
        </div>
        <div className='container-fluid lesson__jumbo'>
          <LessonJumbo />
        </div>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-sm-12 col-md-8 lesson__comments border-r border-grey border-solid'>
              <LessonComments />
            </div>
            <div className='col-sm-12 col-md-4 lesson__course-listings'>
              <LessonListings />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SingleLesson;