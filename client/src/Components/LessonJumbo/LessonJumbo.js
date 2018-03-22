// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Component CSS
import './LessonJumbo.css';

class LessonJumbo extends Component {
  render() {
    let pub = moment(this.props.lesson.publishedOn).format('MMM Do YYYY');
    return (
      <div className='container lesson-jumbo'>
        <div className='row pt-5'>
          <div className='col-sm-12 col-md-6'>
            <div className='row lesson-jumbo__published'>
              <p>Published on {pub}</p>
            </div>
            <div className='row lesson-jumbo__title'>
              <p>
                <span className='lesson-jumbo__title-course'>
                  {this.props.course.title}: &nbsp;
                </span>
                <span className='lesson-jumbo__title-title'>
                  {this.props.lesson.title}
                </span>
              </p>
            </div>
            <div className='row lesson-jumbo__episode'>
              <p>
                <span className='lesson-jumbo__episode-number'>
                  Episode {this.props.lesson.episodeNum} &nbsp; . &nbsp;
                </span>
                <span className='lesson-jumbo__episode-runtime'>
                  Runtime {this.props.lesson.runtime}
                </span>
                </p>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='row lesson-jumbo__description'>
              <p>
                {this.props.lesson.description}
              </p>
            </div>
            <div className='row next-prev-buttons'>
              <div className='lesson-jumbo__prev-button'>
                {this.props.lesson.episodeNum > 1 ?
                  <Link to={`/courses/${this.props.index}/${this.props.lesson.associatedCourseSlug}/episode${this.props.lesson.episodeNum - 1}`} >
                    <p><span>←</span>&nbsp; Prev</p>
                  </Link> : '' 
                }
              </div>
              <div className='lesson-jumbo__next-button'>
                {this.props.lesson.episodeNum < this.props.course.totalLessons ?
                  <Link to={`/courses/${this.props.index}/${this.props.lesson.associatedCourseSlug}/episode${this.props.lesson.episodeNum + 1}`} >
                    <p>Next <span>→</span></p>
                  </Link> : '' 
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LessonJumbo;