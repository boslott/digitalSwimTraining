import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInLinks extends Component {
  render() {
    return (
      <div>
        <Link to='/register'> REGISTER &nbsp; </Link>
        <Link to='/signin'> &nbsp; SIGN IN </Link>
      </div>
    );
  }
}

export default SignInLinks;