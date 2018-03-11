import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Nav.css';

class NavPageLink extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.link}
        className={
            this.props.location.pathname.endsWith(this.props.link) ? 'active' : '' 
        }
        >
          <FontAwesomeIcon icon={this.props.icon} size='lg'/>
          {this.props.linkText}
        </Link>
      </div>
    );
  }
}

export default NavPageLink;