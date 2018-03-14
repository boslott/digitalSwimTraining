// Packages
import React, { Component } from 'react';

// Component CSS and images
import './CourseCard.css';

class CourseCard extends Component {
  render() {
    return (
      <div className='tile'>
        <div className='tile course-card__parent'>
          <div className='tile course-card__child'>
            <div className='course-card'>
              <a href="">
                <div className='course-card__thumbnail'>
                  <img src={window.location.origin + '/images/' + this.props.bgImg} alt=""/>
                </div>
                <div className='course-card__details'>
                  <div className='course-card__skill'>
                    <p>{this.props.skill}</p>
                  </div>
                  <h3>{this.props.title}</h3>
                  <div className='course-card__lesson-count'>
                    <p>{this.props.lessCnt} Lessons</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
