// Packages
import React, { Component } from 'react';

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
                  <p>Freestyle</p>
                </div>
              </div>
              <div className='row'>
                <div className='course-title'>
                  <p>Freestyle 101</p>
                </div>
              </div>
              <div className='row'>
                <div className='course-description'>
                  <p>Oh Freestyle. The stroke when you are <em>free</em> to do as you please. Though this may be true, there is a commonly-taught, specific technique to freestyle that is proven on a daily basis to be the most efficient way to swim through the water.</p>
                  <p>&nbsp;</p>
                  <p>So, go ahead and push the start button below and we will begin our journey to learning the best techniques for the most efficient freestyle stroke. As a spoiler, we will begin with a little history about ... Tarzan!?!</p>
                </div>
              </div>
              <div className='row jumbo__buttons-row'>
                <div className='jumbo__button'>
                  <p>START</p>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4'>
              <div className='jumbo__img'>
                <img src={window.location.origin + '/images/Freestyler.jpg'} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseJumbo;