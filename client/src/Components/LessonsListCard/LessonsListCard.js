// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Component CSS
import './LessonsListCard.css';

class LessonsListCard extends Component {
  render() {
    return (
      <div className={'container list-card list-card__bg-' + this.props.bgShade}>
        <div className='row'>
          <div className='col-sm-3 col-md-2 flex items-center'>
            <div className='list-card__lesson-number'>
              <p>{this.props.lesson.episodeNum}</p>
            </div>
          </div>
          <div className='col-sm-9 col-md-10'>
            <div className='row list-card__lesson-meta'>
              <p className='list-card__lesson-episode'>Episode {this.props.lesson.episodeNum} &nbsp; . &nbsp;</p>
              <p className='list-card__lesson-runtime'>Runtime {this.props.lesson.runtime}</p>
            </div>
            <div className='row list-card__lesson-title'>
              <Link to={`/courses/${this.props.index}/${this.props.lesson.associatedCourseSlug}/episode${this.props.lesson.episodeNum}`}>
                <p>{this.props.lesson.title}</p>
              </Link>
            </div>
            <div className='row list-card__lesson-desc'>
              <p>
                {this.props.lesson.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LessonsListCard;