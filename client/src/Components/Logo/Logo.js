import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './swimmerIcon_yellow.png';

class Logo extends Component {
  render() {
    return (
      <div>
        <Link to='/' className={this.props.customClass ? this.props.customClass : ''}>
          <img src={logo} alt='Digital Swim Training' width={this.props.logoWidth}/>
          &nbsp; DIGITAL SWIM TRAINING
        </Link>
      </div>
    );
  }
}

export default Logo;