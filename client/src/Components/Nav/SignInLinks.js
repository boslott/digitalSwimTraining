// Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInLinks extends Component {

  state = {
    redirect: false,
  }

  logout = () => {
    localStorage.removeItem('token');
    this.setState({ redirect: true });
    this.props.userHasAuthenticated(false);
  }

  render() {
    return (
      <div>
        {!this.props.userAuth &&
          <div>
            <Link
              to='/register'
              className={
                  this.props.location.pathname.endsWith('register') ? 'active' : '' 
            }>
              REGISTER &nbsp;
            </Link>
            <span className='seperate'>&nbsp; | &nbsp;</span>
            <Link
              to='/signin'
              className={
                  this.props.location.pathname.endsWith('signin') ? 'active' : '' 
            }>
              &nbsp; SIGN IN
            </Link>
          </div>
        }
        {this.props.userAuth &&
          <div>
            <Link
              to='/profile'
              className={
                  this.props.location.pathname.endsWith('profile') ? 'active' : '' 
            }>
              PROFILE &nbsp;
            </Link>
            <span className='seperate'>&nbsp; | &nbsp;</span>
            <Link to='/signin' onClick={this.logout}>
              LOGOUT &nbsp;
            </Link>
          </div>
        }
      </div>
    );
  }
}

export default SignInLinks;