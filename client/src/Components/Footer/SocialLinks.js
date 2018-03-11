// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// Footer CSS
import './Footer.css';

class SocialLinks extends Component {
  render() {
    return (
      <div className='flex'>
        <div className='social-link__bg'>
          <Link to='/' className='footer-link__social'>
            <FontAwesomeIcon icon={[ 'fab', 'youtube' ]} size='2x'/>
          </Link>
        </div>
        <div className='social-link__bg'>
          <Link to='/' className='footer-link__social'>
            <FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} size='2x' />
          </Link>
        </div>
        <div className='social-link__bg'>
          <Link to='/' className='footer-link__social'>
            <FontAwesomeIcon icon={[ 'fab', 'twitter' ]} size='2x' />
          </Link>
        </div>
        <div className='social-link__bg'>
          <Link to='/' className='footer-link__social'>
            <FontAwesomeIcon icon={[ 'fab', 'instagram' ]} size='2x' />
          </Link>
        </div>
      </div>
    );
  }
}

export default SocialLinks;