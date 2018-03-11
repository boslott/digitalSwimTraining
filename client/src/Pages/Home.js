// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';

class Home extends Component {
  render() {
    const location = this.props.location;
    return (
      <div>
        <Nav location={location} />
        <div style={{minHeight: '50vh'}}></div>
        <Footer />
      </div>
    );
  }
}

export default Home;