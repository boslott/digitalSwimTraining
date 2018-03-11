import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInLinks extends Component {
  render() {
    return (
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
          &nbsp; SIGN IN </Link>
      </div>
    );
  }
}

export default SignInLinks;