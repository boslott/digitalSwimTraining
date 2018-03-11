import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './swimmerIcon_yellow.png';

class Logo extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <img src={logo} alt='Digital Swim Training' width='100'/>
          &nbsp; Digital Swim Training
        </Link>
      </div>
    );
  }
}

export default Logo;