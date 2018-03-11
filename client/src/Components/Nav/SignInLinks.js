import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInLinks extends Component {
  render() {
    return (
      <div>
        <Link to='/register'> Register &nbsp; </Link>
        <Link to='/signin'> &nbsp; Sign In </Link>
      </div>
    );
  }
}

export default SignInLinks;