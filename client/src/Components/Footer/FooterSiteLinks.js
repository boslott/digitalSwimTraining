import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterSiteLinks extends Component {
  render() {
    return (
      <div>
        <div className='row pl-5 my-4'>
          <h4>SITE LINKS</h4>
        </div>
        <div className='row'>
          <ul className='link-list'>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                About
              </Link>
            </li>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Register
              </Link>
            </li>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='/' className='footer-link__text footer-link__text-grow'>
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterSiteLinks;