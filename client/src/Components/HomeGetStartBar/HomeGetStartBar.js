// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Component CSS
import './HomeGetStartBar.css';

class HomeGetStartBar extends Component {
  render() {
    return (
      <div className='container get-start__bar'>
        <div className='row'>
          <div className='col-sm-7 get-start__text'>
            <p>Get Started Now ... It's Free!</p>
          </div>
          <div className='col-sm-5 get-start__buttons-row'>
            <Link to='/register'>
              <div className='get-start__button'>
                <p>Get Started</p>
              </div>
            </Link>
            <Link to='/courses'>
              <div className='get-start__button'>
                <p>Checkout Courses</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGetStartBar;