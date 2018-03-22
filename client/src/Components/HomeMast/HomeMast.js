// Packages
import React, { Component } from 'react';

// Component CSS
import './HomeMast.css';

class HomeMast extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid home-mast'>
        </div>
        <div className='container-fluid mast-next'>
          <div className='container'>
            <div className='row mast__title'>
              <p>
                Increase Your Swimming IQ ...<br/>
                &nbsp; &nbsp; Increase Your Speed!
              </p>
            </div>
            <div className='row mast__tagline'>
              <p>Our Courses Teach You How To Be Better, Faster, and Make Swimming a Whole Lot Easier! </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMast;