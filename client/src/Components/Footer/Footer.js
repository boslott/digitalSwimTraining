// Packages
import React, { Component } from 'react';

// Component CSS

// Components
import Logo from '../Logo/Logo';
import SocialLinks from './SocialLinks';
import FooterLearnLinks from './FooterLearnLinks';
import FooterSiteLinks from './FooterSiteLinks';

class Footer extends Component {
  render() {
    return (
      <footer className='container-fluid footer-outer'>
        <div className='container footer-inner'>
          <div className='row'>
            <div className='col-sm-6 mt-5'>
              <div className='row pl-3 my-4'>
                <Logo logoWidth={50} customClass='footer-link__text' />
              </div>
              <div className='row text-white my-4'>
                <SocialLinks />
              </div>
              <div className='row'>
                <h6 className='copy'>
                  &copy; Copyright DigitalSwimTraining.com 2018 <br />
                  &nbsp; &nbsp; All Rights Reserved
                </h6>
              </div>
            </div>
            <div className='col-sm-3 mt-5 text-white'>
              <FooterLearnLinks />
            </div>
            <div className='col-sm-3 mt-5 text-white'>
              <FooterSiteLinks />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;