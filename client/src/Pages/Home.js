// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <div style={{minHeight: '50vh'}}></div>
        <Footer />
      </div>
    );
  }
}

export default Home;