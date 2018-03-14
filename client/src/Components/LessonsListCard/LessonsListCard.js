// Packages
import React, { Component } from 'react';

// Component CSS
import './LessonsListCard.css';

class LessonsListCard extends Component {
  render() {
    return (
      <div className={'container list-card list-card__bg-' + this.props.bgShade}>
        <div className='row'>
          <div className='col-sm-3 col-md-2 flex items-center'>
            <div className='list-card__lesson-number'>
              <p>01</p>
            </div>
          </div>
          <div className='col-sm-9 col-md-10'>
            <div className='row list-card__lesson-meta'>
              <p className='list-card__lesson-episode'>Episode 1&nbsp; . &nbsp;</p>
              <p className='list-card__lesson-runtime'>Runtime 12:46</p>
            </div>
            <div className='row list-card__lesson-title'>
              <p>The Four Parts To The Freestyle Pull</p>
            </div>
            <div className='row list-card__lesson-desc'>
              <p>
                Lorem ipsum dolor sit amet, est hac nunc morbi mauris, imperdiet donec tempus duis sed, pede sit, vel metus rhoncus turpis. Non mauris sapiente quis. Volutpat sed. Inceptos sit hac, id accumsan neque vehicula eu, velit mi eget id vehicula, dolor proin proin blandit.
              </p>
              <p>
                Mauris nunc magna, nullam condimentum. Dolor arcu ullamcorper tellus sed risus quisque. Phasellus arcu diam sed mattis cupidatat, egestas risus, luctus curae imperdiet tincidunt, eleifend vel maecenas omnis culpa ut amet, sodales suscipit congue luctus mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LessonsListCard;