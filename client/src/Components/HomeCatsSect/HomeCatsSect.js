// Packages
import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// Component CSS
import './HomeCatsSect.css';

class HomeCatsSect extends Component {
  render() {
    return (
      <section className='container-fluid categories'>
        <div className='container'>
          <div className='row category__icon-row'>
            <div className='col-sm-4 category__icon-col'>
              <div className='category__icon-bg'>
                <img className='category__icon' src='/images/swimming-icons_technique.png' alt='swimming technique icon'/>
              </div>
              <h4 className='category__title'>Swimming Technique</h4>
              <p className='category__desc'>Technique is the main ingredient in fast, efficient swimming. Our courses teach the latest techniques for fast, effective stroke mechanics.</p>
            </div>
            <div className='col-sm-4 category__icon-col'>
              <div className='category__icon-bg'>
                <img className='category__icon' src='/images/swimming-icons_diving.png' alt='diving icon'/>
              </div>
              <h4 className='category__title'>Starts</h4>
              <p className='category__desc'>Starts are a key aspect to all swimming events, no matter the distance. We will teach you how to get off the blocks or the beach FAST!</p>
            </div>
            <div className='col-sm-4 category__icon-col'>
              <div className='category__icon-bg'>
                <img className='category__icon' src='/images/swimming-icons_equipment.png' alt='swimming equipment icon'/>
              </div>
              <h4 className='category__title'>Training Equipment</h4>
              <p className='category__desc'>Training equipment helps to aid your technique improvements as well as gain in strength. We will show you what to use, when to use it, and how to use it for best results.</p>
            </div>
          </div>
          <div className='row category__icon-row'>
          <div className='col-sm-4 category__icon-col'>
              <div className='category__icon-bg'>
                <img className='category__icon' src='/images/swimming-icons_racing.png' alt='racing icon'/>
              </div>
              <h4 className='category__title'>Racing Strategies</h4>
              <p className='category__desc'>Racing in competitions is more than just swimming as fast as you can for as long as you can. We will show you how to stomp your opponents!</p>
            </div>
            <div className='col-sm-4 category__icon-col'>
              <div className='category__icon-bg'>
                <img className='category__icon' src='/images/swimming-icons_coaching.png' alt='swim coaching icon'/>
              </div>
              <h4 className='category__title'>Workouts</h4>
              <p className='category__desc'>Knowing how to swim is one thing, but you have to practice to get better. What are supposed to be doing in the water everyday? Don't worry, we'll show you!</p>
            </div>
            <div className='col-sm-4 category__icon-col'>
              <div className='category__icon-bg'>
                <div className='fa-icon__bg'>
                  <FontAwesomeIcon icon='users' size='4x'/>
                </div>
              </div>
              <h4 className='category__title'>Coaching</h4>
              <p className='category__desc'>Though you can do it alone, it is TOUGH! We will be there with you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeCatsSect;