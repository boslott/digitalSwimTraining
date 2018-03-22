// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Component CSS
import './CourseJumbo.css';

// Components

class CourseJumbo extends Component {
  render() {
    return (
      <div className='container-fluid jumbo__bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-8'>
              <div className='row'>
                <div className='skill-tag'>
                  <p>{this.props.course.category}</p>
                </div>
              </div>
              <div className='row'>
                <div className='course-title'>
                  <p>{this.props.course.title}</p>
                </div>
              </div>
              <div className='row'>
                <div className='course-description'>
                  <p>{this.props.course.description}</p>
                </div>
              </div>
              <div className='row jumbo__buttons-row'>
                <Link to={`/courses/${this.props.index}/${this.props.course.slug}/episode1`}>
                  <div className='jumbo__button'>
                    <p>START</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-sm-12 col-md-4'>
              <div className='jumbo__img'>
                <img src={this.props.course.thumbnail} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseJumbo;