// Packages
import React, { Component } from 'react';

// Component CSS
import './LessonJumbo.css';

class LessonJumbo extends Component {
  render() {
    return (
      <div className='container lesson-jumbo'>
        <div className='row pt-5'>
          <div className='col-sm-12 col-md-6'>
            <div className='row lesson-jumbo__published'>
              <p>Published on March 14, 2018</p>
            </div>
            <div className='row lesson-jumbo__title'>
              <p>
                <span className='lesson-jumbo__title-course'>
                  Freestyle 101: &nbsp;
                </span>
                <span className='lesson-jumbo__title-title'>
                  The Four Parts To The Freestyle Pull
                </span>
              </p>
            </div>
            <div className='row lesson-jumbo__episode'>
              <p>
                <span className='lesson-jumbo__episode-number'>
                  Episode 1 &nbsp; . &nbsp;
                </span>
                <span className='lesson-jumbo__episode-runtime'>
                  Runtime 12:46
                </span>
                </p>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='row lesson-jumbo__description'>
              <p>
                Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat. I've been there. My folks were always on me to groom myself and wear underpants. What am I, the pope?
              </p>
              <p>
                You know, I was God once. It's just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend and watched TV. But then the winter came, and the grasshopper died, and the octopus ate all his acorns. Also he got a race car. Is any of this getting through to you?
              </p>
            </div>
            <div className='row lesson-jumbo__next-button'>
              <p>Next <span>→</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LessonJumbo;