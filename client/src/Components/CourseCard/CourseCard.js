// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Component CSS and images
import './CourseCard.css';

class CourseCard extends Component {
  render() {
    return (
      <div className='tile'>
        <div className='tile course-card__parent'>
          <div className='tile course-card__child'>
            <div className='course-card'>
              <Link to={`/courses/${this.props.index}/${this.props.course.slug}`}>
                <div className='course-card__thumbnail'>
                  <img src={this.props.course.thumbnail} alt=""/>
                </div>
                <div className='course-card__details'>
                  <div className='course-card__skill'>
                    <p>{this.props.course.category}</p>
                  </div>
                  <h3>{this.props.course.title}</h3>
                  <div className='course-card__lesson-count'>
                    <p>{this.props.course.lessCnt} Lessons</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
