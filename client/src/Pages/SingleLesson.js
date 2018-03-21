// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import LessonJumbo from '../Components/LessonJumbo/LessonJumbo';
import LessonComments from '../Components/LessonComments/LessonComments';
import LessonListings from '../Components/LessonListings/LessonListings';
import API from '../utils/API';

class SingleLesson extends Component {

  state = {
    course: {},
    currentLesson: {},
    currentPath: '',
    isLoading: true 
  }

  componentWillMount() {
    this.getPath();
  }

  componentWillUpdate() {
    this.getPath();
  }

  getPath = () => {
    if (this.props.location) {
      console.log('found location');
      console.log('location: ', this.props.location.pathname);
      console.log('statepath: ', this.state.currentPath);
      if (!this.state.currentPath.endsWith(this.props.match.params.episodeNum.substr(7) - 1)) {
        // this.getCourse();
      }
      if (this.props.location.pathname !== this.state.currentPath) {
        this.getCourse();
        // this.setState({ currentPath: this.props.location.pathname });
      }
    }
  }

  getCourse = () => {
    API.getCourse(this.props.match.params.courseSlug)
      .then(course => {
        let episode = this.props.match.params.episodeNum.substr(7) - 1;
        if (this.state.course.title !== null) {
          this.setState({
            course: course.data,
            isLoading: false
          });
        }
        this.setState({
          currentPath: this.props.location.pathname,
          currentLesson: course.data.lessons[episode],
        });
        // this.getLesson();
      })
      .catch(err => console.log(err));
  }

  getLesson = () => {
    if (this.state.currentLesson !== this.state.course.lessons[this.props.match.params.episodeNum.substr(7) - 1]) {
      this.setState({
        currentLesson: this.state.course.lessons[this.props.match.params.episodeNum.substr(7) - 1]
      });
    }
  }


  render() {
    return (
      !this.state.isLoading &&
      <div className='page'>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <div className='container-fluid player__bg bg-black'>
          <div className='container'>
            <div className='row player-row flex justify-center'>
              <VideoPlayer lesson={this.state.currentLesson} />
            </div>
          </div>
        </div>
        <div className='container-fluid lesson__jumbo'>
          <LessonJumbo
            lesson={this.state.currentLesson}
            course={this.state.course}
          />
        </div>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-sm-12 col-md-8 lesson__comments border-r border-grey border-solid'>
              <LessonComments disqusIdentifier={'/' + this.state.courseName} courseName={this.state.course.title} />
            </div>
            <div className='col-sm-12 col-md-4 lesson__course-listings'>
              <LessonListings course={this.state.course} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SingleLesson;