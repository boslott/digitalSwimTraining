// Packages
import React, { Component } from 'react';

// Nav CSS
import './Nav.css';

// Components
import NavPageLink from './NavPageLink';
import Logo from './Logo';
import SignInLinks from './SignInLinks';
 

class Nav extends Component {
  render() {
    return (
      <header className='container-fluid nav-whole'>
        <div className='container nav-inner'>
          <div className='row nav-section top-half'>
            <div className='col-sm-9'>
              <Logo />
            </div>
            <div className='col-sm-3 flex items-center'>
              <SignInLinks />
            </div>
          </div>
          <div className='row nav-section bottom-half d-flex justify-center'>
            <div className='col-sm-1'></div>
            <div className='nav-page-link col-sm-2'>
              <NavPageLink
                icon='home'
                linkText='&nbsp; HOME'
                link='/'
                location={this.props.location}
              />
            </div>
            <div className='nav-page-link col-sm-2'>
              <NavPageLink
                icon='info-circle'
                linkText='&nbsp; ABOUT'
                link='/about'
                location={this.props.location}
              />
            </div>
            <div className='nav-page-link col-sm-2'>
              <NavPageLink
                icon='list-ul'
                linkText='&nbsp; COURSES'
                link='/courses'
                location={this.props.location}
              />
            </div>
            <div className='nav-page-link col-sm-2'>
              <NavPageLink
                icon='envelope'
                linkText='&nbsp; CONTACT'
                link='/contact'
                location={this.props.location}
              />
            </div>
            <div className='col-sm-1'></div>
          </div>
        </div>
      </header> 
    );
  }
}

export default Nav;