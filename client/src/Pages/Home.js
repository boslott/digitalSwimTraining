import React, { Component } from 'react';
import Nav from '../Components/Nav/Nav';

class Home extends Component {
  render() {
    const location = this.props.location;
    return (
      <div>
        <Nav location={location} />
      </div>
    );
  }
}

export default Home;