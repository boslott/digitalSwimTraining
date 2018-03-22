// Packages
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import LessonJumbo from '../Components/LessonJumbo/LessonJumbo';
import LessonComments from '../Components/LessonComments/LessonComments';
import LessonListings from '../Components/LessonListings/LessonListings';

class SingleLesson extends Component {
  render() {
    let currentCourse = this.props.currentCourse;
    let lessonNum = this.props.match.params.episodeNum.substr(7) - 1;
    return (
      // !this.state.isLoading &&
      <div className='page'>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <div className='container-fluid player__bg bg-black'>
          <div className='container'>
            <div className='row player-row flex justify-center'>
              <VideoPlayer lesson={currentCourse.lessons[lessonNum]} />
            </div>
          </div>
        </div>
        <div className='container-fluid lesson__jumbo'>
          <LessonJumbo
            lesson={currentCourse.lessons[lessonNum]}
            course={currentCourse}
            index={this.props.match.params.index}
          />
        </div>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-sm-12 col-md-8 lesson__comments border-r border-grey border-solid'>
              <LessonComments disqusIdentifier={'/' + currentCourse.title} courseName={currentCourse.title} />
            </div>
            <div className='col-sm-12 col-md-4 lesson__course-listings'>
              <LessonListings course={currentCourse} index={this.props.match.params.index} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCourse: state.courses.currentCourse,
});

export default connect(mapStateToProps, null)(SingleLesson);