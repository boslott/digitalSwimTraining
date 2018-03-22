// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import HomeMast from '../Components/HomeMast/HomeMast';
import HomeCatsSect from '../Components/HomeCatsSect/HomeCatsSect';
import HomeGetStartBar from '../Components/HomeGetStartBar/HomeGetStartBar';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        <HomeMast />
        <HomeGetStartBar />
        <HomeCatsSect />
        <HomeGetStartBar />
        <Footer />
      </div>
    );
  }
}

export default Home;