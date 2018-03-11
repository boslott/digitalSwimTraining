import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterLearnLinks extends Component {
  render() {
    return (
      <div>
        <div className='row pl-5 my-4'>
          <h4>LEARN</h4>
        </div>
        <div className='row'>
          <ul className='link-list'>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Stroke Technique
              </Link>
            </li>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Workouts
              </Link>
            </li>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Racing
              </Link>
            </li>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Swimming 101
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterLearnLinks;